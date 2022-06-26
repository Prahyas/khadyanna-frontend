import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../ContextAPI/data';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import 'nepali-datepicker-reactjs/dist/index.css';
import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';

const EdituserListModal = ({
  editModal,
  setEditModal,
  userListid,
  attributes,
}) => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { fetchuserListFunction } = useContext(DataContext);
  const { fetchuserList } = fetchuserListFunction;
  const initialFormState = {
    username: attributes.username,
    email: attributes.email,
    password: attributes.password,
  };

  const [userListInputs, setuserListInputs] = useState(initialFormState);

  const successNotification = () =>
    toast.success('कार्य सफल', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotification = (error) => {
    toast.error(`${error}`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = async (userListid) => {
    try {
      await axios.put(`${api}/api/users/${userListid}`, userListInputs);
      setuserListInputs(initialFormState);
      successNotification();
      fetchuserList();
      setEditModal(false);
    } catch (error) {
      errorNotification(error);
    }
  };

  return (
    <div className='z-[3] bg-rgba h-full w-full fixed top-0 left-0  flex justify-center items-center'>
      <div className='z-[3] bg-white h-[80%] w-[80%] rounded-xl shadow-lg'>
        <div className=' z-[3] w-full h-[15%] border-b-2 flex items-center p-5'>
          <div class='flex justify-between w-full'>
            <h3 class='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
              सच्याउनुहोस्
            </h3>
            <button
              type='button'
              class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => setEditModal(false)}
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
        <div className='h-[70%] overflow-y-auto p-5'>
          <form>
            <div className='flex flex-wrap md:flex-row flex-col'>
              <div className='mr-5 mb-6 grow'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  नाम
                </label>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  value={userListInputs.username}
                  onChange={(e) =>
                    setuserListInputs({
                      ...userListInputs,
                      username: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className='mr-5 mb-6 grow'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  इमेल
                </label>
                <input
                  type='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  value={userListInputs.email}
                  onChange={(e) =>
                    setuserListInputs({
                      ...userListInputs,
                      email: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className='mr-5 mb-6 grow'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  पास्स्वोर्ड 
                </label>
                <input
                  type='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  value={userListInputs.password}
                  onChange={(e) =>
                    setuserListInputs({
                      ...userListInputs,
                      password: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <hr className='mb-5' />

            <ToastContainer />
          </form>
        </div>
        <div className=' w-full h-[15%] border-t-2 flex items-center p-5'>
          <div className='flex'>
            <button
              type='button'
              onClick={() => {
                onSubmit(userListid);
              }}
              className='mr-2 text-white disabled:opacity-75 disabled:cursor-not-allowed bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              disabled={
                !userListInputs.username ||
                !userListInputs.email ||
                !userListInputs.password
              }
            >
              पेश गर्नुहोस्
            </button>
            <button
              type='button'
              onClick={() => {
                setEditModal(false);
              }}
              className=' disabled:opacity-75 disabled:cursor-not-allowed bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              रद्द
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdituserListModal;
