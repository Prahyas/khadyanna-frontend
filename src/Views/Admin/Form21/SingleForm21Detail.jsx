import React, { useState, useEffect, useContext, useRef } from 'react';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import ReactToPrint from 'react-to-print';
import { DataContext } from '../../../ContextAPI/data';

const SingleForm21Detail = ({
  form21id,
  selectedForm21,
  attributes,
  reportModal,
  setreportModal,
}) => {
  const componentRef = useRef();

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
                खाद्य प्रसोधन, खाद्य पोषण, उद्योग, होटेल, पत्रकार, कार्यशाला आदि
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
                      <th scope='col' class='w-[20%] px-2 py-2'>
                        कार्यक्रम संचालन मिति/अवधि
                      </th>
                      <th scope='col' class='w-[30%] px-2 py-2'>
                        कार्यक्रमको नाम
                      </th>
                      <th scope='col' class='w-[15%] px-2 py-2'>
                        कार्यक्रम संचालन स्थान
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        लैङगिक सहभागिता (महिला)
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        लैङगिक सहभागिता (पुरुष)
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        सामाजिक समाबेशी सहभागिता संख्या (दलित)
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        सामाजिक समाबेशी सहभागिता संख्या (जनजाती)
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        सामाजिक समाबेशी सहभागिता संख्या (अन्य)
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        आर्थिक सहभागिता(बिपन्न)
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        आर्थिक सहभागिता(अन्य)
                      </th>
                      <th scope='col' class='w-[15%] px-2 py-2'>
                        कार्यक्रम संयोजक नाम फोन नं
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        उपस्थित निकायहरु
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        प्रसिक्ष्यक
                      </th>
                      <th scope='col' class='w-[5%] px-2 py-2'>
                        कार्यक्रम/कार्यपत्रमा समेटिएका बिषयबस्तु
                      </th>

                      <th
                        scope='col'
                        class='border-l-2 border-l-gray-400 w-[10%] px-2 py-2'
                      >
                        कैफियत
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes.form21collection.map((collectiondata) => {
                      return (
                        <>
                          <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                            <td class='font-bold px-2 py-2 '>
                              {collectiondata.form21months.sanchalanmiti}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.nam}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.sthan}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.mahila}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.purush}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.dalit}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.janjati}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.anya}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.bipanna}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.anya2}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.namnum}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.nikaya}
                            </td>
                            <td class=' px-2 py-2'>
                              {collectiondata.form21months.prasixyak}
                            </td>

                            <td class=' px-2 py-2'>
                              {collectiondata.form21months.bisayabastu}
                            </td>

                            <td class='border-l-2 border-l-gray-400 px-2 py-2 break-after-auto'>
                              {collectiondata.form21months.kaifiyat}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>

                {/* table for download */}

                <table
                  id='table-to-xls'
                  class='hidden mb-5 w-full text-sm text-left text-gray-700 dark:text-gray-400'
                >
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class=' px-2 py-2'>
                        फारम नं २१
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
                      <td class=' px-2 py-2'>
                        {' '}
                        खाद्य प्रसोधन, खाद्य पोषण, उद्योग, होटेल, पत्रकार,
                        कार्यशाला आदि
                      </td>
                      <td class=' px-2 py-2'>{attributes.karyalaya}</td>
                      <td class='px-2 py-2 '>{attributes.arthikbarsha}</td>
                      <td class='px-2 py-2'>{attributes.date}</td>
                    </tr>
                  </tbody>
                  <br />
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='w-[20%] px-2 py-2'>
                        कार्यक्रम संचालन मिति/अवधि
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        कार्यक्रमको नाम
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        कार्यक्रम संचालन स्थान
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        लैङगिक सहभागिता (महिला)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        लैङगिक सहभागिता (पुरुष)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        सामाजिक समाबेशी सहभागिता संख्या (दलित)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        सामाजिक समाबेशी सहभागिता संख्या (जनजाती)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        सामाजिक समाबेशी सहभागिता संख्या (अन्य)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        आर्थिक सहभागिता(बिपन्न)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        आर्थिक सहभागिता(अन्य)
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        कार्यक्रम संयोजक नाम फोन नं
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        उपस्थित निकायहरु
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        प्रसिक्ष्यक
                      </th>
                      <th scope='col' class='w-[10%] px-2 py-2'>
                        कार्यक्रम/कार्यपत्रमा समेटिएका बिषयबस्तु
                      </th>

                      <th
                        scope='col'
                        class='border-l-2 border-l-gray-400 w-[10%] px-2 py-2'
                      >
                        कैफियत
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes.form21collection.map((collectiondata) => {
                      return (
                        <>
                          <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                            <td class='font-bold px-2 py-2 '>
                              {collectiondata.form21months.sanchalanmiti}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.nam}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.sthan}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.mahila}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.purush}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.dalit}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.janjati}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.anya}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.bipanna}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.anya2}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.namnum}
                            </td>
                            <td class='px-2 py-2'>
                              {collectiondata.form21months.nikaya}
                            </td>
                            <td class=' px-2 py-2'>
                              {collectiondata.form21months.prasixyak}
                            </td>

                            <td class=' px-2 py-2'>
                              {collectiondata.form21months.bisayabastu}
                            </td>

                            <td class='border-l-2 border-l-gray-400 px-2 py-2 break-after-auto'>
                              {collectiondata.form21months.kaifiyat}
                            </td>
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

export default SingleForm21Detail;
