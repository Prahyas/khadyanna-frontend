import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../ContextAPI/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleForm1Detail from './SingleForm1Detail';
import EditForm1Modal from './EditForm1Modal';
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import 'nepali-datepicker-reactjs/dist/index.css';
import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';

const Form1Report = () => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { form1Data } = useContext(DataContext);
  const [form1, setform1] = form1Data;
  const { fetchform1Function } = useContext(DataContext);
  const { fetchform1 } = fetchform1Function;
  const [editModal, setEditModal] = useState(false);
  const [selectedForm1, setselectedForm1] = useState(null);
  const [reportModal, setreportModal] = useState(false);
  const initialDate1 = {
    date1: '',
    timestamp1: '',
  };
  const initialDate2 = {
    date2: '',
    timestamp2: '',
  };
  const [searchDate1, setserchDate1] = useState(initialDate1);
  const [searchDate2, setserchDate2] = useState(initialDate2);
  const [filterModal, setfilterModal] = useState(false);

  const deleteForm1 = async (form1id) => {
    await axios
      .delete(`${api}/api/form1s/${form1id}`)
      .then((response) => {
        deleteNotification();
        fetchform1();
      })
      .catch((error) => {
        errorNotification();
      });
  };

  const editRow = (form1) => {
    setselectedForm1(form1);
  };

  const deleteNotification = () =>
    toast.success('कार्य सफल', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotification = () => {
    toast.error('कार्य असफल', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className='flex justify-between items-center mb-2'>
        <p class='text-sm md:text-2xl'>
          {' '}
          खाद्य ऐन/नियम बमोजिम संकलित नमुना विवरण रिपोर्ट
        </p>
        <div className='flex'>
          <button
            onClick={() => {
              setfilterModal(true);
            }}
            className='mr-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-dred-600 dark:hover:bg-dred-700 dark:focus:ring-dred-800'
          >
            फिल्टर
          </button>
          {searchDate1.date1 ||
          searchDate1.timestamp1 ||
          searchDate2.date2 ||
          searchDate2.timestamp2 ? (
            <>
              <button
                onClick={() => {
                  setserchDate1(initialDate1);
                  setserchDate2(initialDate2);
                }}
                className='mr-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-dred-600 dark:hover:bg-dred-700 dark:focus:ring-dred-800'
              >
                X
              </button>
            </>
          ) : null}
        </div>
        {filterModal ? (
          <div class=' bg-rgba overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 bottom-0 z-50 flex justify-center items-center h-full '>
            <div class='relative px-4 w-full max-w-2xl h-full pt-10'>
              <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                <div class='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
                  <h3 class='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
                    फिल्टर
                  </h3>
                  <button
                    type='button'
                    class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                    onClick={() => setfilterModal(false)}
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

                <div class='p-6'>
                  <div className='mb-8 flex text-center justify-between items-center'>
                    <div class=' text-md dark:text-white'>मिति छान्नुहोस् </div>
                    {/* <button
                      onClick={() => {
                        setserchDate1(initialDate1);
                        setserchDate2(initialDate2);
                      }}
                      className=' text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-small rounded-lg text-sm sm:w-auto px-3 py-1.5 text-center dark:bg-dred-600 dark:hover:bg-dred-700 dark:focus:ring-dred-800'
                    >
                      रिसेट् गर्नुहोस्
                    </button> */}
                  </div>

                  <div class='h-full md:flex md:justify-center md:items-center  '>
                    <div>
                      <NepaliDatePicker
                        className='md:mr-5 md:mb-0 mb-5'
                        value={searchDate1.date1}
                        onChange={(value) => {
                          const adDate = bsToAd(value);
                          const timeStamp = Date.parse(adDate);
                          setserchDate1({
                            ...searchDate1,
                            date1: value,
                            timestamp1: timeStamp,
                          });
                        }}
                        options={{
                          calenderLocale: 'ne',
                          valueLocale: 'en',
                        }}
                      />
                    </div>
                    <div class='md:mr-5 md:mb-0 mb-5  text-sm dark:text-white'>
                      -
                    </div>
                    <div>
                      <NepaliDatePicker
                        inputClassName='form-control'
                        className='md:mr-5 md:mb-0 mb-5'
                        value={searchDate2.date2}
                        onChange={(value) => {
                          const adDate = bsToAd(value);
                          const timeStamp = Date.parse(adDate);
                          setserchDate2({
                            ...searchDate2,
                            date2: value,
                            timestamp2: timeStamp,
                          });
                        }}
                        options={{
                          calenderLocale: 'ne',
                          valueLocale: 'en',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <hr className='mb-5' />

      <div class=' overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              {/* <th scope='col' class='px-6 py-3'>
                      स.नं.
                    </th> */}
              <th scope='col' class='w-[25%] px-6 py-3'>
                कार्यालय
              </th>
              <th scope='col' class='w-[25%] px-6 py-3'>
                आ . ब
              </th>
              <th scope='col' class='w-[25%] px-6 py-3'>
                मिति
              </th>

              <th scope='col' class='w-[15%] px-6 py-3'>
                <span class='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          {searchDate1.date1 ||
          searchDate1.timestamp1 ||
          searchDate2.date2 ||
          searchDate2.timestamp2 ? (
            <>
              <tbody>
                {form1
                  .filter(
                    (form1) =>
                      form1.attributes.timecode >= searchDate1.timestamp1 &&
                      form1.attributes.timecode <= searchDate2.timestamp2
                  )
                  .map((form1) => {
                    return (
                      <tr
                        key={form1.id}
                        class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
                      >
                        <th
                          scope='row'
                          class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                        >
                          {form1.attributes.karyalaya}
                        </th>

                        <td class='px-6 py-4'>
                          {form1.attributes.arthikbarsha}
                        </td>
                        <td class='px-6 py-4'>{form1.attributes.date} </td>

                        <td class='flex px-6 py-4'>
                          <a
                            onClick={() => {
                              setEditModal(true);
                              editRow(form1);
                            }}
                            class='mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              class='h-5 w-5'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                              <path
                                fill-rule='evenodd'
                                d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                                clip-rule='evenodd'
                              />
                            </svg>
                          </a>

                          <a
                            onClick={() => deleteForm1(form1.id)}
                            class='mr-2 font-medium text-red-600 dark:text-blue-500 hover:underline'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              class='h-5 w-5'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path
                                fill-rule='evenodd'
                                d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                                clip-rule='evenodd'
                              />
                            </svg>
                          </a>
                          <a
                            onClick={() => {
                              setreportModal(true);
                              editRow(form1);
                            }}
                            class='font-medium text-gray-600 dark:text-blue-500 hover:underline'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                              <path
                                fillRule='evenodd'
                                d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </a>
                          {editModal ? (
                            <EditForm1Modal
                              editModal={editModal}
                              setEditModal={setEditModal}
                              form1id={form1.id}
                              attributes={selectedForm1.attributes}
                              // updateDepartments={updateDepartments}
                            />
                          ) : null}
                          {reportModal ? (
                            <SingleForm1Detail
                              reportModal={reportModal}
                              setreportModal={setreportModal}
                              form1id={form1.id}
                              // // detailId={detail.id}
                              selectedForm1={selectedForm1}
                              attributes={selectedForm1.attributes}
                              // updateDepartments={updateDepartments}
                            />
                          ) : null}
                          <ToastContainer />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </>
          ) : (
            <>
              <tbody>
                {form1.map((form1) => {
                  return (
                    <tr
                      key={form1.id}
                      class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
                    >
                      <th
                        scope='row'
                        class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                      >
                        {form1.attributes.karyalaya}
                      </th>

                      <td class='px-6 py-4'>{form1.attributes.arthikbarsha}</td>
                      <td class='px-6 py-4'>{form1.attributes.date} </td>

                      <td class='flex px-6 py-4'>
                        <a
                          onClick={() => {
                            setEditModal(true);
                            editRow(form1);
                          }}
                          class='mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                            <path
                              fill-rule='evenodd'
                              d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                              clip-rule='evenodd'
                            />
                          </svg>
                        </a>

                        <a
                          onClick={() => deleteForm1(form1.id)}
                          class='mr-2 font-medium text-red-600 dark:text-blue-500 hover:underline'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            class='h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                              clip-rule='evenodd'
                            />
                          </svg>
                        </a>
                        <a
                          onClick={() => {
                            setreportModal(true);
                            editRow(form1);
                          }}
                          class='font-medium text-gray-600 dark:text-blue-500 hover:underline'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                            <path
                              fillRule='evenodd'
                              d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </a>
                        {editModal ? (
                          <EditForm1Modal
                            editModal={editModal}
                            setEditModal={setEditModal}
                            form1id={selectedForm1.id}
                            attributes={selectedForm1.attributes}
                            // updateDepartments={updateDepartments}
                          />
                        ) : null}
                        {reportModal ? (
                          <SingleForm1Detail
                            reportModal={reportModal}
                            setreportModal={setreportModal}
                            form1id={selectedForm1.id}
                            // // detailId={detail.id}
                            selectedForm1={selectedForm1}
                            attributes={selectedForm1.attributes}
                            // updateDepartments={updateDepartments}
                          />
                        ) : null}
                        <ToastContainer />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </>
          )}
        </table>
      </div>
    </>
  );
};

export default Form1Report;
