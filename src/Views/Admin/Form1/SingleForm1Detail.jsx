import React, { useState, useEffect, useContext, useRef } from 'react';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import ReactToPrint from 'react-to-print';
import { DataContext } from '../../../ContextAPI/data';

const SingleForm1Detail = ({
  form1id,
  selectedForm1,
  attributes,
  reportModal,
  setreportModal,
}) => {
  const componentRef = useRef();

  useEffect(() => {
    console.log('selectedForm1', selectedForm1);
    console.log('attribbutes', attributes);
  }, [selectedForm1, attributes]);

  //   const rows = [
  //     { name: 'Khadyanna', render: (item) => item.khadyanna },
  //     { name: 'Shrawan', render: (item) => item.months.shrawan },
  //     { name: 'Bhadra', render: (item) => item.months.bhadra },
  //     { name: 'Ashwin', render: (item) => item.months.ashwin },
  //     { name: 'Kartik', render: (item) => item.months.kartik },
  //     { name: 'Mangsir', render: (item) => item.months.mangsir },
  //     { name: 'Poush', render: (item) => item.months.poush },
  //     { name: 'Magh', render: (item) => item.months.magh },
  //     { name: 'Falgun', render: (item) => item.months.falgun },
  //     { name: 'Chaitra', render: (item) => item.months.chaitra },
  //     { name: 'Baisakh', render: (item) => item.months.baisakh },
  //     { name: 'Jestha', render: (item) => item.months.jestha },
  //     { name: 'Ashar', render: (item) => item.months.ashar },
  //   ];

  //   const body = rows.map(({ name, render }) => (
  //     <tr key={name}>
  //       <td>{name}</td>
  //       {attributes.collection.map((item, i) => (
  //         <td key={i}>{render(item)}</td>
  //       ))}
  //     </tr>
  //   ));

  return (
    <>
      <div class=' bg-rgba overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 flex justify-center items-center h-full '>
        <div class='relative px-4 w-full max-w-full h-full pt-5'>
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div class='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
              <h3 class='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
                रिपोर्ट
              </h3>
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
            <div className='flex justify-end my-5 px-5'>
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
                className='download-table-xls-button text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-dred-600 dark:hover:bg-dred-700 dark:focus:ring-dred-800'
                table='table-to-xls'
                filename='tablexls'
                sheet='tablexls'
                buttonText='डाउन्लोड गर्नुहोस'
              />
            </div>
            <div ref={componentRef} class='p-6 space-y-3'>
              {/* <div className='mb-5 flex justify-between text-black font-bold'>
                <div className='flex flex-col'>
                  <span className='mb-2'>बुझेको मिति : {attributes.date}</span>
                  <span>आर्थिक वर्ष: {attributes.fiscalyear}</span>
                </div>
                <span>बुझी लिनेको नाम: {attributes.customername}</span>
              </div> */}

              <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table
                  id='table-to-xls'
                  class='mb-5 w-full text-sm text-left text-gray-700 dark:text-gray-400'
                >
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class=' px-2 py-2'>
                        कार्यालय
                      </th>
                      <th scope='col' class=' px-2 py-2'>
                        आ . ब
                      </th>
                      <th scope='col' class=' px-2 py-2'>
                        आर्थिक बर्ष
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class=' px-2 py-2'>{attributes.karyalaya}</td>
                      <td class='px-2 py-2 '>{attributes.aawo}</td>
                      <td class='px-2 py-2'>{attributes.year}</td>
                    </tr>
                  </tbody>
                  <br />
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        खाद्य समूह
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
                        हालसम्मको जम्मा
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {body} */}
                    {attributes.collection.map((collectiondata) => {
                      const month = collectiondata.months;
                      const { id, ...onlyMonths } = month;
                      console.log(onlyMonths);

                      const total = Object.values(onlyMonths).reduce(
                        (t, n) => parseInt(t) + parseInt(n)
                      );
                      return (
                        <>
                          <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                            <td class='font-bold px-2 py-2 '>
                              {collectiondata.khadyanna}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.shrawan}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.bhadra}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.ashwin}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.kartik}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.mangsir}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.poush}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.magh}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.falgun}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.chaitra}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.baisakh}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.jestha}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.months.ashar}
                            </td>
                            <td class='px-6 py-4'>{total}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleForm1Detail;
