import React, { useState, useEffect, useContext, useRef } from 'react';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import ReactToPrint from 'react-to-print';
import { DataContext } from '../../../ContextAPI/data';

const SingleForm30Detail = ({
  form30id,
  selectedForm30,
  attributes,
  reportModal,
  setreportModal,
}) => {
  const componentRef = useRef();

  const monthsArray = attributes.form30collection.map((item) => {
    const month = item.form30months;
    const { id, ...onlyMonths } = month;
    return onlyMonths;
  });
  console.log('moonths', monthsArray);

  const columnTotal = [
    monthsArray.reduce((acc, n) => {
      for (var prop in n) {
        if (acc.hasOwnProperty(prop)) acc[prop] += parseInt(n[prop]);
        else acc[prop] = parseInt(n[prop]);
      }
      return acc;
    }, {}),
  ];

  console.log('columntotal', columnTotal[0]);

  const barshikjammaArray = Object.entries(columnTotal[0]).filter((item) => {
    if (item.includes('barshikpunjigat') || item.includes('barshikchalu')) {
      return true;
    }
  });

  const barshikjammaObject = Object.fromEntries(barshikjammaArray);

  const barshikjammaTotal = Object.values(barshikjammaObject).reduce(
    (t, n) => t + n
  );

  const mahinajammaArray = Object.entries(columnTotal[0]).filter((item) => {
    if (item.includes('mahinapunjigat') || item.includes('mahinachalu')) {
      return true;
    }
  });

  const mahinajammaObject = Object.fromEntries(mahinajammaArray);

  const mahinajammaTotal = Object.values(mahinajammaObject).reduce(
    (t, n) => t + n
  );

  return (
    <>
      <div class=' bg-rgba overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 flex justify-center items-center h-full '>
        <div class='relative px-4 w-full max-w-full h-full pt-5'>
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div class='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
              <h3 class='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
                रिपोर्ट
              </h3>
              <div className='flex'>
                <ReactToPrint
                  trigger={() => (
                    <button className='mr-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-dred-600 dark:hover:bg-dred-700 dark:focus:ring-dred-800'>
                      प्रिन्ट गर्नुहोस
                    </button>
                  )}
                  content={() => componentRef.current}
                />
                <ReactHtmlTableToExcel
                  id='test-table-xls-button'
                  className='mr-5 download-table-xls-button text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-dred-600 dark:hover:bg-dred-700 dark:focus:ring-dred-800'
                  table='table-to-xls'
                  filename='tablexls'
                  sheet='tablexls'
                  buttonText='डाउन्लोड गर्नुहोस'
                />

                <button
                  type='button'
                  class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  onClick={() => setreportModal(false)}
                >
                  <svg
                    class='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div ref={componentRef} class='p-6 space-y-5'>
              <span className='flex justify-center text-black  align-center text-xl'>
                मासिक बित्तिय प्रगति
              </span>
              <div className='mb-5 flex justify-between text-black '>
                <div className='flex flex-col'>
                  <span className='mb-2'>
                    {' '}
                    कार्यालय : {attributes.karyalaya}
                  </span>
                  <span>आर्थिक वर्ष : {attributes.arthikbarsha}</span>
                </div>
                <div className='flex flex-col'>
                  <span className='mb-2'> मिति : {attributes.date}</span>
                </div>
              </div>

              <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table class=' mb-5 w-full text-sm text-left text-gray-700 dark:text-gray-400'>
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='w-[15%] px-2 py-2'>
                        बार्षिक बजेट (पुँजीगत)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        बार्षिक बजेट (चालु)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        बार्षिक बजेट (जम्मा)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        यस महिनाको खर्च (पुँजीगत)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        यस महिनाको खर्च (चालु)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        यस महिनाको खर्च (जम्मा)
                      </th>

                      <th
                        scope='col'
                        class='border-l-2 border-l-gray-400 w-[10%] px-2 py-2'
                      >
                        यस महिनाको राजस्वो
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes.form30collection.map((collectiondata) => {
                      const month = collectiondata.form30months;
                      const { id, ...onlyMonths } = month;
                      const barshikjammaArray = Object.entries(
                        onlyMonths
                      ).filter((item) => {
                        if (
                          item.includes('barshikpunjigat') ||
                          item.includes('barshikchalu')
                        ) {
                          return true;
                        }
                      });

                      const barshikjammaObject =
                        Object.fromEntries(barshikjammaArray);

                      const barshikjammaTotal = Object.values(
                        barshikjammaObject
                      ).reduce((t, n) => parseInt(t) + parseInt(n));

                      const mahinajammaArray = Object.entries(
                        onlyMonths
                      ).filter((item) => {
                        if (
                          item.includes('mahinapunjigat') ||
                          item.includes('mahinachalu')
                        ) {
                          return true;
                        }
                      });

                      const mahinajammaObject =
                        Object.fromEntries(mahinajammaArray);

                      const mahinajammaTotal = Object.values(
                        mahinajammaObject
                      ).reduce((t, n) => parseInt(t) + parseInt(n));

                      return (
                        <>
                          <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                            <td class='font-bold px-2 py-2 '>
                              {collectiondata.form30months.barshikpunjigat}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form30months.barshikchalu}
                            </td>
                            <td class='px-2 py-2'>{barshikjammaTotal}</td>
                            <td class='px-2 py-2'>
                              {collectiondata.form30months.mahinapunjigat}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form30months.mahinachalu}
                            </td>
                            <td class='px-2 py-2'>{mahinajammaTotal}</td>

                            <td class='border-l-2 border-l-gray-400 px-2 py-2 break-after-auto'>
                              {collectiondata.form30months.mahinarajaswo}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>

                  <tfoot>
                    <tr class='border-b-2 border-t-2 border-t-gray-400 border-b-gray-400 dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                      {columnTotal.map((item) => {
                        return (
                          <>
                            <td class='px-2 py-2'>{item.barshikpunjigat}</td>
                            <td class='px-2 py-2'>{item.barshikchalu}</td>
                            <td class='px-2 py-2'>{barshikjammaTotal}</td>
                            <td class='px-2 py-2'>{item.mahinapunjigat}</td>
                            <td class='px-2 py-2'>{item.mahinachalu}</td>
                            <td class='px-2 py-2'>{mahinajammaTotal}</td>

                            <td class='border-l-2 border-l-gray-400  px-2 py-2'>
                              {item.mahinarajaswo}
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  </tfoot>
                </table>

                {/* table for download */}

                <table
                  id='table-to-xls'
                  class='hidden mb-5 w-full text-sm text-left text-gray-700 dark:text-gray-400'
                >
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class=' px-2 py-2'>
                        फारम नं ३०
                      </th>
                      <th scope='col' class=' px-2 py-2'>
                        कार्यालय
                      </th>
                      <th scope='col' class=' px-2 py-2'>
                        आ . ब
                      </th>
                      <th scope='col' class=' px-2 py-2'>
                        मिति
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class=' px-2 py-2'> मासिक बित्तिय प्रगति</td>
                      <td class=' px-2 py-2'>{attributes.karyalaya}</td>
                      <td class='px-2 py-2 '>{attributes.arthikbarsha}</td>
                      <td class='px-2 py-2'>{attributes.date}</td>
                    </tr>
                  </tbody>
                  <br />
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='w-[15%] px-2 py-2'>
                        बार्षिक बजेट (पुँजीगत)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        बार्षिक बजेट (चालु)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        बार्षिक बजेट (जम्मा)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        यस महिनाको खर्च (पुँजीगत)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        यस महिनाको खर्च (चालु)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        यस महिनाको खर्च (जम्मा)
                      </th>

                      <th
                        scope='col'
                        class='border-l-2 border-l-gray-400 w-[10%] px-2 py-2'
                      >
                        यस महिनाको राजस्वो
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes.form30collection.map((collectiondata) => {
                      const month = collectiondata.form30months;
                      const { id, ...onlyMonths } = month;
                      const barshikjammaArray = Object.entries(
                        onlyMonths
                      ).filter((item) => {
                        if (
                          item.includes('barshikpunjigat') ||
                          item.includes('barshikchalu')
                        ) {
                          return true;
                        }
                      });

                      const barshikjammaObject =
                        Object.fromEntries(barshikjammaArray);

                      const barshikjammaTotal = Object.values(
                        barshikjammaObject
                      ).reduce((t, n) => parseInt(t) + parseInt(n));

                      const mahinajammaArray = Object.entries(
                        onlyMonths
                      ).filter((item) => {
                        if (
                          item.includes('mahinapunjigat') ||
                          item.includes('mahinachalu')
                        ) {
                          return true;
                        }
                      });

                      const mahinajammaObject =
                        Object.fromEntries(mahinajammaArray);

                      const mahinajammaTotal = Object.values(
                        mahinajammaObject
                      ).reduce((t, n) => parseInt(t) + parseInt(n));

                      return (
                        <>
                          <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                            <td class='font-bold px-2 py-2 '>
                              {collectiondata.form30months.barshikpunjigat}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form30months.barshikchalu}
                            </td>
                            <td class='px-2 py-2'>{barshikjammaTotal}</td>
                            <td class='px-2 py-2'>
                              {collectiondata.form30months.mahinapunjigat}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form30months.mahinachalu}
                            </td>
                            <td class='px-2 py-2'>{mahinajammaTotal}</td>

                            <td class='border-l-2 border-l-gray-400 px-2 py-2 break-after-auto'>
                              {collectiondata.form30months.mahinarajaswo}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>

                  <tfoot>
                    <tr class='border-b-2 border-t-2 border-t-gray-400 border-b-gray-400 dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                      {columnTotal.map((item) => {
                        return (
                          <>
                            <td class='px-2 py-2'>{item.barshikpunjigat}</td>
                            <td class='px-2 py-2'>{item.barshikchalu}</td>
                            <td class='px-2 py-2'>{barshikjammaTotal}</td>
                            <td class='px-2 py-2'>{item.mahinapunjigat}</td>
                            <td class='px-2 py-2'>{item.mahinachalu}</td>
                            <td class='px-2 py-2'>{mahinajammaTotal}</td>

                            <td class='border-l-2 border-l-gray-400  px-2 py-2'>
                              {item.mahinarajaswo}
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleForm30Detail;
