import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../ContextAPI/data';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import 'nepali-datepicker-reactjs/dist/index.css';
import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';

const EditForm30Modal = ({ editModal, setEditModal, form30id, attributes }) => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { fetchform30Function } = useContext(DataContext);
  const { fetchform30 } = fetchform30Function;
  const [inputFields, setInputFields] = useState([
    ...attributes.form30collection,
  ]);
  const initialFormState = {
    date: attributes.date,
    timecode: parseInt(attributes.timecode),
    arthikbarsha: attributes.arthikbarsha,
    karyalaya: attributes.karyalaya,
    form30collection: attributes.form30collection,
  };

  const [form30Inputs, setform30Inputs] = useState(initialFormState);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'barshikpunjigat') {
      values[index].form30months.barshikpunjigat = event.target.value;
    } else if (event.target.name === 'barshikchalu') {
      values[index].form30months.barshikchalu = event.target.value;
    } else if (event.target.name === 'mahinapunjigat') {
      values[index].form30months.mahinapunjigat = event.target.value;
    } else if (event.target.name === 'mahinachalu') {
      values[index].form30months.mahinachalu = event.target.value;
    } else {
      values[index].form30months.mahinarajaswo = event.target.value;
    }

    setInputFields(values);
    setform30Inputs({ ...form30Inputs, form30collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      form30months: {
        barshikpunjigat: 0,
        barshikchalu: 0,
        mahinapunjigat: 0,
        mahinachalu: 0,
        mahinarajaswo: 0,
      },
    });
    setInputFields(values);
    setform30Inputs({ ...form30Inputs, form30months: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    if (values.length > 1) {
      values.splice(index, 1);
    }
    setInputFields(values);
    setform30Inputs({ ...form30Inputs, form30months: values });
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

  const onSubmit = async (form30id) => {
    try {
      await axios.put(`${api}/api/form30s/${form30id}`, {
        data: form30Inputs,
      });
      setform30Inputs(initialFormState);
      successNotification();
      fetchform30();
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
              मासिक बित्तिय प्रगति
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
              <div className='mr-5 mb-6 md:w-[25%]  '>
                <label className=' block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  कार्यालय
                </label>
                <select
                  name='karyalaya'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  required
                  value={form30Inputs.karyalaya}
                  onChange={(e) =>
                    setform30Inputs({
                      ...form30Inputs,
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
              value={form30Inputs.karyalaya}
              onChange={(e) =>
                setform30Inputs({
                  ...form30Inputs,
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
                  value={form30Inputs.arthikbarsha}
                  onChange={(e) =>
                    setform30Inputs({
                      ...form30Inputs,
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
                  value={form30Inputs.date}
                  onChange={(value) => {
                    const adDate = bsToAd(value);

                    const newtimestamp = Date.parse(adDate);

                    setform30Inputs({
                      ...form30Inputs,
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
                          value={inputField.form30months.barshikpunjigat}
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
                          value={inputField.form30months.barshikchalu}
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
                          value={inputField.form30months.mahinapunjigat}
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
                          value={inputField.form30months.mahinachalu}
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
                          value={inputField.form30months.mahinarajaswo}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <ToastContainer />
          </form>
        </div>
        <div className=' w-full h-[15%] border-t-2 flex items-center p-5'>
          <div className='flex'>
            <button
              type='button'
              onClick={() => {
                onSubmit(form30id);
              }}
              className='mr-2 text-white disabled:opacity-75 disabled:cursor-not-allowed bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              disabled={
                !form30Inputs.karyalaya ||
                !form30Inputs.arthikbarsha ||
                form30Inputs.date === ''
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

export default EditForm30Modal;
