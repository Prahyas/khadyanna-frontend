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

const Form5 = () => {
  const navigate = useNavigate();
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const [inputFields, setInputFields] = useState([
    {
      bibaran: '',
      form5months: {
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
        chaumasikpragati: 0,
        arthikbarshapragati: 0,
        bigatbarshapragati: 0,
        kaifiyat: '',
      },
    },
  ]);
  const initialFormState = {
    date: '',
    timecode: '',
    arthikbarsha: '',
    karyalaya: '',
    form5collection: [
      {
        bibaran: '',
        form5months: {
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
          chaumasikpragati: 0,
          arthikbarshapragati: 0,
          bigatbarshapragati: 0,
          kaifiyat: '',
        },
      },
    ],
  };

  const [form5Inputs, setform5Inputs] = useState(initialFormState);
  const { fetchform5Function } = useContext(DataContext);
  const { fetchform5 } = fetchform5Function;

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'bibaran') {
      values[index].bibaran = event.target.value;
    } else if (event.target.name === 'shrawan') {
      values[index].form5months.shrawan = event.target.value;
    } else if (event.target.name === 'bhadra') {
      values[index].form5months.bhadra = event.target.value;
    } else if (event.target.name === 'ashwin') {
      values[index].form5months.ashwin = event.target.value;
    } else if (event.target.name === 'kartik') {
      values[index].form5months.kartik = event.target.value;
    } else if (event.target.name === 'mangsir') {
      values[index].form5months.mangsir = event.target.value;
    } else if (event.target.name === 'poush') {
      values[index].form5months.poush = event.target.value;
    } else if (event.target.name === 'magh') {
      values[index].form5months.magh = event.target.value;
    } else if (event.target.name === 'falgun') {
      values[index].form5months.falgun = event.target.value;
    } else if (event.target.name === 'chaitra') {
      values[index].form5months.chaitra = event.target.value;
    } else if (event.target.name === 'baisakh') {
      values[index].form5months.baisakh = event.target.value;
    } else if (event.target.name === 'jestha') {
      values[index].form5months.jestha = event.target.value;
    } else if (event.target.name === 'ashar') {
      values[index].form5months.ashar = event.target.value;
    } else if (event.target.name === 'chaumasikpragati') {
      values[index].form5months.chaumasikpragati = event.target.value;
    } else if (event.target.name === 'arthikbarshapragati') {
      values[index].form5months.arthikbarshapragati = event.target.value;
    } else if (event.target.name === 'bigatbarshapragati') {
      values[index].form5months.bigatbarshapragati = event.target.value;
    } else {
      values[index].form5months.kaifiyat = event.target.value;
    }

    setInputFields(values);
    setform5Inputs({ ...form5Inputs, form5collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      bibaran: '',
      form5months: {
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
        chaumasikpragati: 0,
        arthikbarshapragati: 0,
        bigatbarshapragati: 0,
        kaifiyat: '',
      },
    });
    setInputFields(values);
    setform5Inputs({ ...form5Inputs, form5months: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setform5Inputs({ ...form5Inputs, form5months: values });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}/api/form5s`, {
        data: form5Inputs,
      })
      .then((response) => {
        setform5Inputs(initialFormState);
        setInputFields([
          {
            bibaran: '',
            form5months: {
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
              chaumasikpragati: '',
              arthikbarshapragati: '',
              bigatbarshapragati: '',
              kaifiyat: '',
            },
          },
        ]);
        successNotification();
        fetchform5();
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
    console.log('form5Inputs', form5Inputs);
  }, [form5Inputs]);

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>
          {' '}
          होटल स्तरीकरण लोगो वितरण सम्बन्धि विवरण{' '}
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
              value={form5Inputs.karyalaya}
              onChange={(e) =>
                setform5Inputs({
                  ...form5Inputs,
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
              value={form5Inputs.karyalaya}
              onChange={(e) =>
                setform5Inputs({
                  ...form5Inputs,
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
              value={form5Inputs.arthikbarsha}
              onChange={(e) =>
                setform5Inputs({
                  ...form5Inputs,
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
              value={form5Inputs.date}
              onChange={(value) => {
                const adDate = bsToAd(value);

                const newtimestamp = Date.parse(adDate);

                setform5Inputs({
                  ...form5Inputs,
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
                  name='bibaran'
                  className='mr-5 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  required
                  value={inputField.bibaran}
                  onChange={(event) => handleInputChange(index, event)}
                >
                  <option value='' selected disabled>
                    एउटा छान्नुहोस्
                  </option>
                  <option value='अति उत्तम'>अति उत्तम </option>
                  <option value='उत्तम'>उत्तम </option>
                  <option value='सन्तोषजनक'>सन्तोषजनक</option>
                  <option value='सामान्य'>सामान्य</option>
                  <option value='स्तरीकरणमा नपरेको'>स्तरीकरणमा नपरेको</option>
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
                      value={inputField.form5months.shrawan}
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
                      value={inputField.form5months.bhadra}
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
                      value={inputField.form5months.ashwin}
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
                      value={inputField.form5months.kartik}
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
                      value={inputField.form5months.mangsir}
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
                      value={inputField.form5months.poush}
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
                      value={inputField.form5months.magh}
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
                      value={inputField.form5months.falgun}
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
                      value={inputField.form5months.chaitra}
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
                      value={inputField.form5months.baisakh}
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
                      value={inputField.form5months.jestha}
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
                      value={inputField.form5months.ashar}
                      placeholder='असार'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      महिना, चौमासिक प्रगति
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='chaumasikpragati'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='पटक'
                      value={inputField.form5months.chaumasikpragati}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>

                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      यस आ ब को हालसम्मको प्रगति
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='arthikbarshapragati'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='संख्या'
                      value={inputField.form5months.arthikbarshapragati}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      बिगत बर्षहरुदेखि हालसम्मको प्रगति
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='bigatbarshapragati'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='संख्या'
                      value={inputField.form5months.bigatbarshapragati}
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
                      value={inputField.form5months.kaifiyat}
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
            !form5Inputs.karyalaya ||
            !form5Inputs.arthikbarsha ||
            form5Inputs.date === '' ||
            inputFields.bibaran == ''
          }
        >
          पेश गर्नुहोस्
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default Form5;
