import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../ContextAPI/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleForm1Detail from './SingleForm1Detail';
import EditForm1Modal from './EditForm1Modal';

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

  const deleteForm1 = async (form1id) => {
    await axios
      .delete(`${api}/api/form1s/${form1id}`)
      .then((response) => {
        deleteNotification();
        setInterval(() => {
          fetchform1();
        }, 1500);
      })
      .catch((error) => {
        errorNotification();
      });
  };

  const editRow = (form1) => {
    setselectedForm1(form1);
  };

  const deleteNotification = () =>
    toast.success('Deleted successfully', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotification = () => {
    toast.error('Error, something went wrong', {
      position: 'top-right',
      autoClose: 1500,
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
        <p class='text-2xl dark:text-white'>फारम नं १ रिपोर्ट</p>
        <div class='hidden h-10 lg:flex'>
          <span class='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-3 w-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </span>
          <input
            type='text'
            id='website-admin'
            class='rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-red-500 focus:border-red-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
            placeholder='Search'
          />
        </div>
      </div>

      <hr className='mb-5' />

      <div class=' overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              {/* <th scope='col' class='px-6 py-3'>
                      स.नं.
                    </th> */}
              <th scope='col' class='w-[15%] px-6 py-3'>
                कार्यालय
              </th>
              <th scope='col' class='w-[15%] px-6 py-3'>
                आ . ब
              </th>
              <th scope='col' class='w-[15%] px-6 py-3'>
                आर्थिक बर्ष
              </th>

              <th scope='col' class='px-6 py-3'>
                <span class='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
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

                  <td class='px-6 py-4'>{form1.attributes.aawo}</td>
                  <td class='px-6 py-4'>{form1.attributes.year} </td>

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
        </table>
      </div>
    </>
  );
};

export default Form1Report;
