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

const Form15 = () => {
  const navigate = useNavigate();
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const [inputFields, setInputFields] = useState([
    {
      form15months: {
        udhyognamthegana: '',
        bastukonam: '',
        sankalanmiti: '',
        sankalansthan: '',
        khani: '',
        peshgarekomiti: '',
        bishlesanmiti: '',
        prakar: '',
        parameter: 0,
        dayarsthan: '',
        dayarmiti: '',
        dayargarnekhani: '',
        dayargarnekaryalaya: '',
        kaifiyat: '',
      },
    },
  ]);
  const initialFormState = {
    date: '',
    timecode: '',
    arthikbarsha: '',
    karyalaya: '',
    saptaha: '',
    form15collection: [
      {
        form15months: {
          udhyognamthegana: '',
          bastukonam: '',
          sankalanmiti: '',
          sankalansthan: '',
          khani: '',
          peshgarekomiti: '',
          bishlesanmiti: '',
          prakar: '',
          parameter: 0,
          dayarsthan: '',
          dayarmiti: '',
          dayargarnekhani: '',
          dayargarnekaryalaya: '',
          kaifiyat: '',
        },
      },
    ],
  };

  const [form15Inputs, setform15Inputs] = useState(initialFormState);
  const { fetchform15Function } = useContext(DataContext);
  const { fetchform15 } = fetchform15Function;

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'udhyognamthegana') {
      values[index].form15months.udhyognamthegana = event.target.value;
    } else if (event.target.name === 'bastukonam') {
      values[index].form15months.bastukonam = event.target.value;
    } else if (event.target.name === 'khani') {
      values[index].form15months.khani = event.target.value;
    } else if (event.target.name === 'sankalansthan') {
      values[index].form15months.sankalansthan = event.target.value;
    } else if (event.target.name === 'peshgarekomiti') {
      values[index].form15months.peshgarekomiti = event.target.value;
    } else if (event.target.name === 'bishlesanmiti') {
      values[index].form15months.bishlesanmiti = event.target.value;
    } else if (event.target.name === 'prakar') {
      values[index].form15months.prakar = event.target.value;
    } else if (event.target.name === 'parameter') {
      values[index].form15months.parameter = event.target.value;
    } else if (event.target.name === 'dayarsthan') {
      values[index].form15months.dayarsthan = event.target.value;
    } else if (event.target.name === 'dayarmiti') {
      values[index].form15months.dayarmiti = event.target.value;
    } else if (event.target.name === 'dayargarnekhani') {
      values[index].form15months.dayargarnekhani = event.target.value;
    } else if (event.target.name === 'dayargarnekaryalaya') {
      values[index].form15months.dayargarnekaryalaya = event.target.value;
    } else {
      values[index].form15months.kaifiyat = event.target.value;
    }

    setInputFields(values);
    setform15Inputs({ ...form15Inputs, form15collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      form15months: {
        udhyognamthegana: '',
        bastukonam: '',
        sankalanmiti: '',
        sankalansthan: '',
        khani: '',
        peshgarekomiti: '',
        bishlesanmiti: '',
        prakar: '',
        parameter: 0,
        dayarsthan: '',
        dayarmiti: '',
        dayargarnekhani: '',
        dayargarnekaryalaya: '',
        kaifiyat: '',
      },
    });
    setInputFields(values);
    setform15Inputs({ ...form15Inputs, form15months: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setform15Inputs({ ...form15Inputs, form15months: values });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}/api/form15s`, {
        data: form15Inputs,
      })
      .then((response) => {
        setform15Inputs(initialFormState);
        setInputFields([
          {
            form15months: {
              udhyognamthegana: '',
              bastukonam: '',
              sankalanmiti: '',
              sankalansthan: '',
              khani: '',
              peshgarekomiti: '',
              bishlesanmiti: '',
              prakar: '',
              parameter: '',
              dayarsthan: '',
              dayarmiti: '',
              dayargarnekhani: '',
              dayargarnekaryalaya: '',
              kaifiyat: '',
            },
          },
        ]);
        successNotification();
        fetchform15();
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
    console.log('form15Inputs', form15Inputs);
  }, [form15Inputs]);
  useEffect(() => {
    console.log('inputFields', inputFields[0].form15months);
  }, [inputFields]);

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'> मुद्दा दायरी विवरण</p>
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
              value={form15Inputs.karyalaya}
              onChange={(e) =>
                setform15Inputs({
                  ...form15Inputs,
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
              value={form15Inputs.karyalaya}
              onChange={(e) =>
                setform15Inputs({
                  ...form15Inputs,
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
              value={form15Inputs.arthikbarsha}
              onChange={(e) =>
                setform15Inputs({
                  ...form15Inputs,
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
              value={form15Inputs.date}
              onChange={(value) => {
                const adDate = bsToAd(value);

                const newtimestamp = Date.parse(adDate);

                setform15Inputs({
                  ...form15Inputs,
                  date: value,
                  timecode: newtimestamp,
                });
              }}
              options={{ calenderLocale: 'ne', valueLocale: 'en' }}
            />
          </div>
          <div className='mr-5 mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              सप्ताह
            </label>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='सप्ताह'
              value={form15Inputs.saptaha}
              onChange={(e) =>
                setform15Inputs({
                  ...form15Inputs,
                  saptaha: e.target.value,
                })
              }
              required
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
                  d='m15 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
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
                <div className='flex mb-3 justify-end'>
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
                        d='m15 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
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
                        d='m15 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>

                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      उद्योग/पसल/होटलको नाम ठेगाना
                    </label>
                    <input
                      type='text'
                      name='udhyognamthegana'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form15months.udhyognamthegana}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>

                  <div className='mr-5 mb-6 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      खाद्य तथा दाना बस्तुको नाम
                    </label>
                    <input
                      type='text'
                      name='bastukonam'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form15months.bastukonam}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      नमुना संकलन मिति
                    </label>
                    <NepaliDatePicker
                      inputClassName='form-control'
                      className='mb-6'
                      value={inputField.form15months.sankalanmiti}
                      onChange={(value) => {
                        const adDate = bsToAd(value);
                        const newtimestamp = Date.parse(adDate);
                        setInputFields([
                          {
                            form15months: {
                              ...inputField.form15months,
                              sankalanmiti: value,
                            },
                          },
                        ]);
                      }}
                      options={{ calenderLocale: 'ne', valueLocale: 'en' }}
                    />
                  </div>
                  <div className='mr-5 mb-6 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      नमुना संकलन स्थान
                    </label>
                    <input
                      type='text'
                      name='sankalansthan'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form15months.sankalansthan}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      नमुना संकलन गर्ने खा.नि
                    </label>
                    <input
                      type='text'
                      name='khani'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form15months.khani}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      सा.वि.मा पेश गरेको मिति
                    </label>
                    <NepaliDatePicker
                      inputClassName='form-control'
                      className='mb-6'
                      value={inputField.form15months.peshgarekomiti}
                      onChange={(value) => {
                        const adDate = bsToAd(value);
                        const newtimestamp = Date.parse(adDate);
                        setInputFields([
                          {
                            form15months: {
                              ...inputField.form15months,
                              peshgarekomiti: value,
                            },
                          },
                        ]);
                      }}
                      options={{ calenderLocale: 'ne', valueLocale: 'en' }}
                    />
                  </div>
                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      बिश्लेषण मिति
                    </label>
                    <NepaliDatePicker
                      inputClassName='form-control'
                      className='mb-6'
                      value={inputField.form15months.bishlesanmiti}
                      onChange={(value) => {
                        const adDate = bsToAd(value);
                        const newtimestamp = Date.parse(adDate);
                        setInputFields([
                          {
                            form15months: {
                              ...inputField.form15months,
                              bishlesanmiti: value,
                            },
                          },
                        ]);
                      }}
                      options={{ calenderLocale: 'ne', valueLocale: 'en' }}
                    />
                  </div>
                  <div className='mr-5 mb-6 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      अभियोगको प्रकार
                    </label>
                    <input
                      type='text'
                      name='prakar'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form15months.prakar}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      प्रतिकुल पारामिटर
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='parameter'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form15months.parameter}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-6 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      मुद्दा दायर स्थान
                    </label>
                    <input
                      type='text'
                      name='dayarsthan'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form15months.dayarsthan}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      मुद्दा दायर मिति
                    </label>
                    <NepaliDatePicker
                      inputClassName='form-control'
                      className='mb-6'
                      value={inputField.form15months.dayarmiti}
                      onChange={(value) => {
                        const adDate = bsToAd(value);
                        const newtimestamp = Date.parse(adDate);
                        setInputFields([
                          {
                            form15months: {
                              ...inputField.form15months,
                              dayarmiti: value,
                            },
                          },
                        ]);
                      }}
                      options={{ calenderLocale: 'ne', valueLocale: 'en' }}
                    />
                  </div>
                  <div className='mr-5 mb-6 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      मुद्दा दायर गर्ने खा.नि
                    </label>
                    <input
                      type='text'
                      name='dayargarnekhani'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form15months.dayargarnekhani}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      मुद्दा दायर गर्ने कार्यालय
                    </label>
                    <input
                      type='text'
                      name='dayargarnekaryalaya'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form15months.dayargarnekaryalaya}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-6 grow'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      कैफियत
                    </label>
                    <textarea
                      type='text'
                      name='kaifiyat'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='कैफियत'
                      value={inputField.form15months.kaifiyat}
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
            !form15Inputs.karyalaya ||
            !form15Inputs.arthikbarsha ||
            form15Inputs.date === '' ||
            inputFields.khadyanna == ''
          }
        >
          पेश गर्नुहोस्
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default Form15;
