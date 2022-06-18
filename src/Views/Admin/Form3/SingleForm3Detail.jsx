import React, { useState, useEffect, useContext, useRef } from 'react';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import ReactToPrint from 'react-to-print';
import { DataContext } from '../../../ContextAPI/data';

const SingleForm3Detail = ({
  form3id,
  selectedForm3,
  attributes,
  reportModal,
  setreportModal,
}) => {
  const componentRef = useRef();

  const monthsArray = attributes.form3collection.map((item) => {
    const month = item.form3months;
    const { id, ...onlyMonths } = month;
    return onlyMonths;
  });

  const columnTotal = [
    monthsArray.reduce((acc, n) => {
      for (var prop in n) {
        if (acc.hasOwnProperty(prop)) acc[prop] += n[prop];
        else acc[prop] = n[prop];
      }
      return acc;
    }, {}),
  ];

  const grandTotal = Object.values(columnTotal[0]).reduce(
    (accumulator, value) => {
      return accumulator + value;
    },
    0
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
                निरीक्षण अनुगमन विवरण
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
                  <span>सप्ताह : {attributes.saptaha}</span>
                </div>
              </div>

              <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table class=' mb-5 w-full text-sm text-left text-gray-700 dark:text-gray-400'>
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        अनुगमन निरीक्षण विवरण
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        श्रावण
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        भदौ
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        आश्विन
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        कार्तिक
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        मंसिर
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        पुष
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        माघ
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        फाल्गुन
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        चैत्र
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        बैशाख
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        जेठ
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        असार
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        पटक
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        संख्या
                      </th>

                      <th
                        scope='col'
                        class='border-l-2 border-l-gray-400 w-[15%] px-2 py-2'
                      >
                        कैफियत
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes.form3collection.map((collectiondata) => {
                      const month = collectiondata.form3months;

                      const { id, ...onlyMonths } = month;
                      const rowTotal = Object.values(onlyMonths).reduce(
                        (t, n) => t + n
                      );

                      return (
                        <>
                          <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                            <td class='font-bold px-2 py-2 '>
                              {collectiondata.bibaran}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.shrawan}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.bhadra}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.ashwin}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.kartik}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.mangsir}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.poush}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.magh}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.falgun}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.chaitra}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.baisakh}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.jestha}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.ashar}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.patak}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.sankhya}
                            </td>
                            <td class='border-l-2 border-l-gray-400  px-2 py-2 break-after-auto'>
                              {collectiondata.form3months.kaifiyat}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>

                  <tfoot>
                    <tr class='border-b-2 border-t-2 border-t-gray-400 border-b-gray-400 dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                      <td class='font-bold px-2 py-2 '>जम्मा</td>
                      {columnTotal.map((item) => {
                        return (
                          <>
                            <td class='px-2 py-2'>{item.shrawan}</td>
                            <td class='px-2 py-2'>{item.bhadra}</td>
                            <td class='px-2 py-2'>{item.ashwin}</td>
                            <td class='px-2 py-2'>{item.kartik}</td>
                            <td class='px-2 py-2'>{item.mangsir}</td>
                            <td class='px-2 py-2'>{item.poush}</td>
                            <td class='px-2 py-2'>{item.magh}</td>
                            <td class='px-2 py-2'>{item.falgun}</td>
                            <td class='px-2 py-2'>{item.chaitra}</td>
                            <td class='px-2 py-2'>{item.baisakh}</td>
                            <td class='px-2 py-2'>{item.jestha}</td>
                            <td class='px-2 py-2'>{item.ashar}</td>
                            <td class='px-2 py-2'>{item.patak}</td>
                            <td class='px-2 py-2'>{item.sankhya}</td>
                            <td class='border-l-2 border-l-gray-400  px-2 py-2'>
                              {``}
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
                        फारम नं ३
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
                      <th scope='col' class=' px-2 py-2'>
                        सप्ताह
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class=' px-2 py-2'>निरीक्षण अनुगमन विवरण</td>
                      <td class=' px-2 py-2'>{attributes.karyalaya}</td>
                      <td class='px-2 py-2 '>{attributes.arthikbarsha}</td>
                      <td class='px-2 py-2'>{attributes.date}</td>
                      <td class='px-2 py-2'>{attributes.saptaha}</td>
                    </tr>
                  </tbody>
                  <br />
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='w-[55%] px-2 py-2'>
                        अनुगमन निरीक्षण विवरण
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        श्रावण
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        भदौ
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        आश्विन
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        कार्तिक
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        मंसिर
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        पुष
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        माघ
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        फाल्गुन
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        चैत्र
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        बैशाख
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        जेठ
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        असार
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        पटक
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        संख्या
                      </th>
                      <th
                        scope='col'
                        class='border-l-2 border-l-gray-400 w-[15%] px-2 py-2'
                      >
                        कैफियत
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes.form3collection.map((collectiondata) => {
                      const month = collectiondata.form3months;

                      const { id, ...onlyMonths } = month;
                      const rowTotal = Object.values(onlyMonths).reduce(
                        (t, n) => t + n
                      );

                      return (
                        <>
                          <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                            <td class='font-bold px-2 py-2 '>
                              {collectiondata.bibaran}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.shrawan}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.bhadra}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.ashwin}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.kartik}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.mangsir}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.poush}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.magh}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.falgun}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.chaitra}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.baisakh}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.jestha}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.ashar}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.patak}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form3months.sankhya}
                            </td>
                            <td class='border-l-2 border-l-gray-400  px-6 py-2'>
                              {collectiondata.form3months.kaifiyat}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>

                  <tfoot>
                    <tr class='border-b-2 border-t-2 border-t-gray-400 border-b-gray-400 dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                      <td class='font-bold px-2 py-2 '>जम्मा</td>
                      {columnTotal.map((item) => {
                        return (
                          <>
                            <td class='px-2 py-2'>{item.shrawan}</td>
                            <td class='px-2 py-2'>{item.bhadra}</td>
                            <td class='px-2 py-2'>{item.ashwin}</td>
                            <td class='px-2 py-2'>{item.kartik}</td>
                            <td class='px-2 py-2'>{item.mangsir}</td>
                            <td class='px-2 py-2'>{item.poush}</td>
                            <td class='px-2 py-2'>{item.magh}</td>
                            <td class='px-2 py-2'>{item.falgun}</td>
                            <td class='px-2 py-2'>{item.chaitra}</td>
                            <td class='px-2 py-2'>{item.baisakh}</td>
                            <td class='px-2 py-2'>{item.jestha}</td>
                            <td class='px-2 py-2'>{item.ashar}</td>
                            <td class='px-2 py-2'>{item.patak}</td>
                            <td class='px-2 py-2'>{item.sankhya}</td>
                            <td class='border-l-2 border-l-gray-400  px-6 py-2'>
                              {``}
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

export default SingleForm3Detail;
