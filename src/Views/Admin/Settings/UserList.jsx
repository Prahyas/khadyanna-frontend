import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../ContextAPI/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleuserListDetail from './SingleuserListDetail';
import EdituserListModal from './EdituserListModal';

const UserList = () => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { userListData } = useContext(DataContext);
  const [userList, setuserList] = userListData;
  const { fetchuserListFunction } = useContext(DataContext);
  const { fetchuserList } = fetchuserListFunction;
  const [editModal, setEditModal] = useState(false);
  const [selecteduserList, setselecteduserList] = useState(null);
  const [reportModal, setreportModal] = useState(false);

  const deleteuserList = async (userListid) => {
    await axios
      .delete(`${api}/api/users/${userListid}`)
      .then((response) => {
        deleteNotification();
        fetchuserList();
      })
      .catch((error) => {
        errorNotification();
      });
  };

  const editRow = (userList) => {
    setselecteduserList(userList);
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

  console.log('userdata', selecteduserList);

  return (
    <>
      <div className='flex justify-between items-center mb-2'>
        <p class='text-sm md:text-2xl'> सेटिङ</p>
      </div>

      <hr className='mb-5' />

      <div class=' overflow-x-auto shadow-md sm:rounded-lg'>
        <table class='table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' class='w-[25%] px-6 py-3'>
                नाम
              </th>
              <th scope='col' class='w-[25%] px-6 py-3'>
                इमेल
              </th>

              <th scope='col' class='w-[15%] px-6 py-3'>
                <span class='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {userList.map((userList) => {
              return (
                <tr
                  key={userList.id}
                  class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
                >
                  <th
                    scope='row'
                    class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                  >
                    {userList.username}
                  </th>

                  <td class='px-6 py-4'>{userList.email}</td>

                  <td class='flex px-6 py-4'>
                    <a
                      onClick={() => {
                        setEditModal(true);
                        editRow(userList);
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
                      onClick={() => deleteuserList(userList.id)}
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
                    {/* <a
                      onClick={() => {
                        setreportModal(true);
                        editRow(userList);
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
                    </a> */}
                    {editModal ? (
                      <EdituserListModal
                        editModal={editModal}
                        setEditModal={setEditModal}
                        userListid={selecteduserList.id}
                        attributes={selecteduserList}
                      />
                    ) : null}
                    {reportModal ? (
                      <SingleuserListDetail
                        reportModal={reportModal}
                        setreportModal={setreportModal}
                        userListid={selecteduserList.id}
                        selecteduserList={selecteduserList}
                        attributes={selecteduserList}
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

export default UserList;
