import React, { useContext, useEffect, useState } from 'react';

import { DataContext } from '../../../ContextAPI/data';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import 'nepali-datepicker-reactjs/dist/index.css';
import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';
import { data } from 'autoprefixer';

const AddUser = () => {
  const navigate = useNavigate();
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const initialFormState = {
    username: '',
    email: '',
    password: '',
  };

  const [addUser, setaddUser] = useState(initialFormState);
  const { userListFunction } = useContext(DataContext);
  const { userList } = userListFunction;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}/api/users`, addUser)
      .then((response) => {
        setdaddUser(initialFormState);
        successNotification();
        fetchuserList();
      })
      .catch((error) => {
        errorNotification();
        console.log(error);
      });
  };

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

  useEffect(() => {
    console.log('daddUser', daddUser);
  }, [daddUser]);

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>नया प्रयोगकर्ता थप्नुहोस</p>
      </div>
      <hr className='mb-5' />
      <form>
        <div className='flex flex-wrap md:flex-row flex-col'>
          <div className='mr-5 mb-6 md:w-[25%]  '>
            <label className=' block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              कार्यालय
            </label>
            <select
              name='karyalaya'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              required
              value={daddUser.karyalaya}
              onChange={(e) =>
                setdaddUser({
                  ...daddUser,
                  karyalaya: e.target.value,
                })
              }
            >
              <option value='' selected disabled>
                एउटा छान्नुहोस्
              </option>
              <option value='PS'>PS</option>
              <option value='FFSQRD'>FFSQRD</option>
              <option value='NFFRL'>NFFRL</option>
              <option value='FTDND'>FTDND</option>
              <option value='FTQCO'>FTQCO</option>
              <option value='FIEQCO'>FIEQCO</option>
              <option value='FTQCDO'>FTQCDO</option>
            </select>
            {/* <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              कार्यालय
            </label>
            <input
              type='text'
              id='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='कार्यालय'
              value={daddUser.karyalaya}
              onChange={(e) =>
                setdaddUser({
                  ...daddUser,
                  karyalaya: e.target.value,
                })
              }
              required
            /> */}
          </div>
          <div className='mr-5 mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              आ . ब
            </label>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='आ . ब'
              value={daddUser.arthikbarsha}
              onChange={(e) =>
                setdaddUser({
                  ...daddUser,
                  arthikbarsha: e.target.value,
                })
              }
              required
            />
          </div>
          <div className='mr-5 mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              मिति
            </label>
            <NepaliDatePicker
              inputClassName='form-control'
              className='mb-6'
              value={daddUser.date}
              onChange={(value) => {
                const adDate = bsToAd(value);

                const newtimestamp = Date.parse(adDate);

                setdaddUser({
                  ...daddUser,
                  date: value,
                  timecode: newtimestamp,
                });
              }}
              options={{ calenderLocale: 'ne', valueLocale: 'en' }}
            />
          </div>
        </div>

        <hr className='mb-5' />
        <div className='mb-6'>
          <div className='flex justify-between items-center mb-2'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              डेटा हल्नुहोस्
            </label>
            <button
              type='button'
              onClick={() => handleAddFields()}
              className='flex justify-center items-center py-2 px-3 text-xs font-medium text-center text-white bg-red-500 rounded-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                  clipRule='evenodd'
                />
              </svg>
              <span>नया</span>
            </button>
          </div>
          {inputFields.map((inputField, index) => {
            return (
              <div
                key={index}
                className='my-3 flex-col justify-center items-center space-x-5 border-2 p-4'
              >
                <div className='flex mb-3 items-center justify-between'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    रो नं. {index + 1}
                  </label>
                  <div className='flex'>
                    <button
                      type='button'
                      onClick={() => handleAddFields()}
                      className='mr-2 flex justify-center items-center py-2 px-3 text-xs font-medium text-center text-white bg-red-500 rounded-lg'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5 mr-2'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span>नया</span>
                    </button>
                    <button
                      type='button'
                      className='py-2 px-3 text-xs font-medium text-center text-white bg-red-500 rounded-lg'
                      onClick={() => handleRemoveFields(index)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6 grow'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      बार्षिक बजेट (पुँजीगत)
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='barshikpunjigat'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='पटक'
                      value={inputField.userListmonths.barshikpunjigat}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>

                  <div className='mr-5 mb-6 grow'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      बार्षिक बजेट (चालु)
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='barshikchalu'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.userListmonths.barshikchalu}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>

                  <div className='mr-5 mb-6 grow'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      यस महिनाको खर्च (पुँजीगत)
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='mahinapunjigat'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='संख्या'
                      value={inputField.userListmonths.mahinapunjigat}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-6 grow'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      यस महिनाको खर्च (चालु )
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='mahinachalu'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='संख्या'
                      value={inputField.userListmonths.mahinachalu}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6 grow'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      यस महिनाको राजस्वो
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='mahinarajaswo'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.userListmonths.mahinarajaswo}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type='submit'
          onClick={onSubmit}
          className='text-white disabled:opacity-75 disabled:cursor-not-allowed bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          disabled={
            !daddUser.karyalaya ||
            !daddUser.arthikbarsha ||
            daddUser.date === ''
          }
        >
          पेश गर्नुहोस्
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default AddUser;
