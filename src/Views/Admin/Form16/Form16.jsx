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

const Form16 = () => {
  const navigate = useNavigate();
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const [inputFields, setInputFields] = useState([
    {
      khadyanna: '',
      form16months: {
        shrawan: 0,
        bhadra: 0,
        ashwin: 0,
        kartik: 0,
        mangsir: 0,
        poush: 0,
        magh: 0,
        falgun: 0,
        chaitra: 0,
        baisakh: 0,
        jestha: 0,
        ashar: 0,
      },
    },
  ]);
  const initialFormState = {
    date: '',
    timecode: '',
    arthikbarsha: '',
    karyalaya: '',
    form16collection: [
      {
        khadyanna: '',
        form16months: {
          shrawan: 0,
          bhadra: 0,
          ashwin: 0,
          kartik: 0,
          mangsir: 0,
          poush: 0,
          magh: 0,
          falgun: 0,
          chaitra: 0,
          baisakh: 0,
          jestha: 0,
          ashar: 0,
        },
      },
    ],
  };

  const [form16Inputs, setform16Inputs] = useState(initialFormState);
  const { fetchform16Function } = useContext(DataContext);
  const { fetchform16 } = fetchform16Function;

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'khadyanna') {
      values[index].khadyanna = event.target.value;
    } else if (event.target.name === 'shrawan') {
      values[index].form16months.shrawan = event.target.value;
    } else if (event.target.name === 'bhadra') {
      values[index].form16months.bhadra = event.target.value;
    } else if (event.target.name === 'ashwin') {
      values[index].form16months.ashwin = event.target.value;
    } else if (event.target.name === 'kartik') {
      values[index].form16months.kartik = event.target.value;
    } else if (event.target.name === 'mangsir') {
      values[index].form16months.mangsir = event.target.value;
    } else if (event.target.name === 'poush') {
      values[index].form16months.poush = event.target.value;
    } else if (event.target.name === 'magh') {
      values[index].form16months.magh = event.target.value;
    } else if (event.target.name === 'falgun') {
      values[index].form16months.falgun = event.target.value;
    } else if (event.target.name === 'chaitra') {
      values[index].form16months.chaitra = event.target.value;
    } else if (event.target.name === 'baisakh') {
      values[index].form16months.baisakh = event.target.value;
    } else if (event.target.name === 'jestha') {
      values[index].form16months.jestha = event.target.value;
    } else {
      values[index].form16months.ashar = event.target.value;
    }

    setInputFields(values);
    setform16Inputs({ ...form16Inputs, form16collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      khadyanna: '',
      form16months: {
        shrawan: 0,
        bhadra: 0,
        ashwin: 0,
        kartik: 0,
        mangsir: 0,
        poush: 0,
        magh: 0,
        falgun: 0,
        chaitra: 0,
        baisakh: 0,
        jestha: 0,
        ashar: 0,
      },
    });
    setInputFields(values);
    setform16Inputs({ ...form16Inputs, form16months: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setform16Inputs({ ...form16Inputs, form16months: values });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}/api/form16s`, {
        data: form16Inputs,
      })
      .then((response) => {
        setform16Inputs(initialFormState);
        setInputFields([
          {
            khadyanna: '',
            form16months: {
              shrawan: '',
              bhadra: '',
              ashwin: '',
              kartik: '',
              mangsir: '',
              poush: '',
              magh: '',
              falgun: '',
              chaitra: '',
              baisakh: '',
              jestha: '',
              ashar: '',
            },
          },
        ]);
        successNotification();
        fetchform16();
      })
      .catch((error) => {
        errorNotification();
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
    console.log('form16Inputs', form16Inputs);
  }, [form16Inputs]);

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>
          {' '}
          खाद्य तथा दाना अनुज्ञा पत्र जारी/नविकरण/उद्योग सिफारिस
        </p>
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
              value={form16Inputs.karyalaya}
              onChange={(e) =>
                setform16Inputs({
                  ...form16Inputs,
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
              value={form16Inputs.karyalaya}
              onChange={(e) =>
                setform16Inputs({
                  ...form16Inputs,
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
              value={form16Inputs.arthikbarsha}
              onChange={(e) =>
                setform16Inputs({
                  ...form16Inputs,
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
              value={form16Inputs.date}
              onChange={(value) => {
                const adDate = bsToAd(value);

                const newtimestamp = Date.parse(adDate);

                setform16Inputs({
                  ...form16Inputs,
                  date: value,
                  timecode: newtimestamp,
                });
              }}
              options={{ calenderLocale: 'ne', valueLocale: 'en' }}
            />
            {/* <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
              placeholder='आर्थिक बर्ष'
              value={form16Inputs.date}
              onChange={(e) =>
                setform16Inputs({
                  ...form16Inputs,
                  date: e.target.value,
                })
              }
              required
            /> */}
          </div>
        </div>

        <hr className='mb-5' />
        <div className='mb-6'>
          <div className='flex justify-between items-center mb-2'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              महिना अनुसार डेटा हल्नुहोस्
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
                <select
                  id='countries'
                  name='khadyanna'
                  className='mr-5 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  required
                  value={inputField.khadyanna}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value='' selected disabled>
                    एउटा छान्नुहोस्
                  </option>
                  <option value='दुध तथा दुध पदार्थ'>दुध तथा दुध पदार्थ</option>
                  <option value='तेल तथा घेउ जन्य'>तेल तथा घेउ जन्य</option>
                  <option value='फल तथा सागपात'>फल तथा सागपात</option>
                  <option value='मसला'>मसला</option>
                  <option value='चिया, कफि'>चिया, कफि</option>
                  <option value='नुन'>नुन</option>
                  <option value='खाद्यान्न दलहन र सोबाट बनेको'>
                    खाद्यान्न दलहन र सोबाट बनेको
                  </option>
                  <option value='प्र. पिउने पानी'>प्र. पिउने पानी</option>
                  <option value='गुलियो पदार्थ'>गुलियो पदार्थ</option>
                  <option value='कन्फेक्सनरी'>कन्फेक्सनरी</option>
                  <option value=' मासु तथा मासुजन्य'>मासु तथा मासुजन्य</option>
                  <option value='दाना'>दाना</option>

                  <option value='अन्य'>अन्य</option>
                </select>

                <div className='flex flex-wrap md:flex-nowrap mb-2 space-x-3'>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      श्रावण
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='shrawan'
                      value={inputField.form16months.shrawan}
                      placeholder='श्रावण'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      भदौ
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='bhadra'
                      value={inputField.form16months.bhadra}
                      placeholder='भदौ'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      आश्विन
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='ashwin'
                      value={inputField.form16months.ashwin}
                      placeholder='आश्विन'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      कार्तिक
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='kartik'
                      value={inputField.form16months.kartik}
                      placeholder='कार्तिक'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      मंसिर
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='mangsir'
                      value={inputField.form16months.mangsir}
                      placeholder='मंसिर'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      पुष
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='poush'
                      value={inputField.form16months.poush}
                      placeholder='पुष'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>

                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      माघ
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='magh'
                      value={inputField.form16months.magh}
                      placeholder='माघ'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      फाल्गुन
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='falgun'
                      value={inputField.form16months.falgun}
                      placeholder='फाल्गुन'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      चैत्र
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='chaitra'
                      value={inputField.form16months.chaitra}
                      placeholder='चैत्र'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>

                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      बैशाख
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='baisakh'
                      value={inputField.form16months.baisakh}
                      placeholder='बैशाख'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      जेठ
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='jestha'
                      value={inputField.form16months.jestha}
                      placeholder='जेठ'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                  <div className='mb-2'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      असार
                    </label>
                    <input
                      type='number'
                      min={0}
                      className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      required
                      name='ashar'
                      value={inputField.form16months.ashar}
                      placeholder='असार'
                      onChange={(event) => handleInputChange(index, event)}
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
            !form16Inputs.karyalaya ||
            !form16Inputs.arthikbarsha ||
            form16Inputs.date === '' ||
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

export default Form16;
