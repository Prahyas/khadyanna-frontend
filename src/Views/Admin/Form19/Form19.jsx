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

const Form19 = () => {
  const navigate = useNavigate();
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const [inputFields, setInputFields] = useState([
    {
      form19months: {
        ujurimiti: '',
        petika: '',
        samachya: '',
        prakar: '',
        shrot: '',
        sambhodanmiti: '',
        bibaran: '',
      },
    },
  ]);
  const initialFormState = {
    date: '',
    timecode: '',
    arthikbarsha: '',
    form19collection: [
      {
        form19months: {
          ujurimiti: '',
          petika: '',
          samachya: '',
          prakar: '',
          shrot: '',
          sambhodanmiti: '',
          bibaran: '',
        },
      },
    ],
  };

  const [form19Inputs, setform19Inputs] = useState(initialFormState);
  const { fetchform19Function } = useContext(DataContext);
  const { fetchform19 } = fetchform19Function;

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'ujurimiti') {
      values[index].form19months.ujurimiti = event.target.value;
    } else if (event.target.name === 'petika') {
      values[index].form19months.petika = event.target.value;
    } else if (event.target.name === 'samachya') {
      values[index].form19months.samachya = event.target.value;
    } else if (event.target.name === 'prakar') {
      values[index].form19months.prakar = event.target.value;
    } else if (event.target.name === 'shrot') {
      values[index].form19months.shrot = event.target.value;
    } else if (event.target.name === 'sambhodanmiti') {
      values[index].form19months.sambhodanmiti = event.target.value;
    } else {
      values[index].form19months.bibaran = event.target.value;
    }

    setInputFields(values);
    setform19Inputs({ ...form19Inputs, form19collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      form19months: {
        ujurimiti: '',
        petika: '',
        samachya: '',
        prakar: '',
        shrot: '',
        sambhodanmiti: '',
        bibaran: '',
      },
    });
    setInputFields(values);
    setform19Inputs({ ...form19Inputs, form19months: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setform19Inputs({ ...form19Inputs, form19months: values });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}/api/form19s`, {
        data: form19Inputs,
      })
      .then((response) => {
        setform19Inputs(initialFormState);
        setInputFields([
          {
            form19months: {
              ujurimiti: '',
              petika: '',
              samachya: '',
              prakar: '',
              shrot: '',
              sambhodanmiti: '',
              bibaran: '',
            },
          },
        ]);
        successNotification();
        fetchform19();
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
    console.log('form19Inputs', form19Inputs);
  }, [form19Inputs]);
  useEffect(() => {
    console.log('inputFields', inputFields[0].form19months);
  }, [inputFields]);

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'> उजुरी/गुनासो ब्येवस्थापन</p>
      </div>
      <hr className='mb-5' />
      <form>
        <div className='flex flex-wrap md:flex-row flex-col'>
          <div className='mr-5 mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              आ . ब
            </label>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='आ . ब'
              value={form19Inputs.arthikbarsha}
              onChange={(e) =>
                setform19Inputs({
                  ...form19Inputs,
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
              value={form19Inputs.date}
              onChange={(value) => {
                const adDate = bsToAd(value);

                const newtimestamp = Date.parse(adDate);

                setform19Inputs({
                  ...form19Inputs,
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
                <div className='flex mb-3 justify-between'>
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
                  <div className='mr-5 mb-5 grow'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      उजुरी तथा गुनासो प्राप्त मिति
                    </label>
                    <NepaliDatePicker
                      inputClassName='form-control'
                      className='mb-6'
                      value={inputField.form19months.ujurimiti}
                      onChange={(value) => {
                        const adDate = bsToAd(value);
                        const newtimestamp = Date.parse(adDate);
                        setInputFields([
                          {
                            form19months: {
                              ...inputField.form19months,
                              ujurimiti: value,
                            },
                          },
                        ]);
                      }}
                      options={{ calenderLocale: 'ne', valueLocale: 'en' }}
                    />
                  </div>
                  <div className='mr-5 mb-5 grow '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      गुनासो पेटिका
                    </label>
                    <input
                      type='text'
                      name='petika'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form19months.petika}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-5 grow '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      गुनासो अधिकारी समक्ष्य
                    </label>
                    <input
                      type='text'
                      name='samachya'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form19months.samachya}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6 grow '>
                    <label className=' block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      प्रकार
                    </label>
                    <select
                      name='prakar'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      value={inputField.form19months.prakar}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value='' selected disabled>
                        एउटा छान्नुहोस्
                      </option>
                      <option value='मौखिक'>मौखिक</option>
                      <option value='लिखित'>लिखित</option>
                    </select>
                  </div>
                  <div className='mr-5 mb-6 grow'>
                    <label className=' block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      गुनासो स्रोत
                    </label>
                    <select
                      name='shrot'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      value={inputField.form19months.shrot}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value='' selected disabled>
                        एउटा छान्नुहोस्
                      </option>
                      <option value='जिल्ला प्रशासन कर्यलायबाट लेखि आएको'>
                        जिल्ला प्रशासन कर्यलायबाट लेखि आएको
                      </option>
                      <option value='बाणिज्य कर्यलायबाट लेखि आएको'>
                        बाणिज्य कर्यलायबाट लेखि आएको
                      </option>
                      <option value='पत्र पत्रिका'>पत्र पत्रिका</option>
                      <option value='अख्तियार दु अ.आ'>अख्तियार दु अ.आ</option>
                      <option value='पत्रकार'>पत्रकार</option>
                      <option value='हेलो सरकार'>हेलो सरकार</option>
                      <option value='उपभोक्ता संघ संस्था'>
                        उपभोक्ता संघ संस्था
                      </option>
                      <option value='अन्य'>अन्य</option>
                    </select>
                  </div>
                  <div className='mr-5 mb-6 grow'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      उजुरी/गुनासो सम्बोधन मिति
                    </label>
                    <NepaliDatePicker
                      inputClassName='form-control'
                      className='mb-6'
                      value={inputField.form19months.sambhodanmiti}
                      onChange={(value) => {
                        const adDate = bsToAd(value);
                        const newtimestamp = Date.parse(adDate);
                        setInputFields([
                          {
                            form19months: {
                              ...inputField.form19months,
                              sambhodanmiti: value,
                            },
                          },
                        ]);
                      }}
                      options={{ calenderLocale: 'ne', valueLocale: 'en' }}
                    />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6 grow '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      सम्बोधन/कारवाही विवरण
                    </label>
                    <input
                      type='text'
                      name='bibaran'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      value={inputField.form19months.bibaran}
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
            !form19Inputs.arthikbarsha ||
            form19Inputs.date === '' ||
            inputFields[0].form19months.ujurimiti == ''
          }
        >
          पेश गर्नुहोस्
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default Form19;
