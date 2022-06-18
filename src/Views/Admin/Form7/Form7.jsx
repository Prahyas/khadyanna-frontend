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

const Form7 = () => {
  const navigate = useNavigate();
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const [inputFields, setInputFields] = useState([
    {
      prayogsala: '',
      form7months: {
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
        sankhya: 0,
        pratikul: 0,
        pragati: 0,
        pragatipercent: 0,
        kaifiyat: '',
      },
    },
  ]);
  const initialFormState = {
    date: '',
    timecode: '',
    arthikbarsha: '',
    karyalaya: '',
    form7collection: [
      {
        prayogsala: '',
        form7months: {
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
          sankhya: 0,
          pratikul: 0,
          pragati: 0,
          pragatipercent: 0,
          kaifiyat: '',
        },
      },
    ],
  };

  const [form7Inputs, setform7Inputs] = useState(initialFormState);
  const { fetchform7Function } = useContext(DataContext);
  const { fetchform7 } = fetchform7Function;

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'prayogsala') {
      values[index].prayogsala = event.target.value;
    } else if (event.target.name === 'shrawan') {
      values[index].form7months.shrawan = event.target.value;
    } else if (event.target.name === 'bhadra') {
      values[index].form7months.bhadra = event.target.value;
    } else if (event.target.name === 'ashwin') {
      values[index].form7months.ashwin = event.target.value;
    } else if (event.target.name === 'kartik') {
      values[index].form7months.kartik = event.target.value;
    } else if (event.target.name === 'mangsir') {
      values[index].form7months.mangsir = event.target.value;
    } else if (event.target.name === 'poush') {
      values[index].form7months.poush = event.target.value;
    } else if (event.target.name === 'magh') {
      values[index].form7months.magh = event.target.value;
    } else if (event.target.name === 'falgun') {
      values[index].form7months.falgun = event.target.value;
    } else if (event.target.name === 'chaitra') {
      values[index].form7months.chaitra = event.target.value;
    } else if (event.target.name === 'baisakh') {
      values[index].form7months.baisakh = event.target.value;
    } else if (event.target.name === 'jestha') {
      values[index].form7months.jestha = event.target.value;
    } else if (event.target.name === 'ashar') {
      values[index].form7months.ashar = event.target.value;
    } else if (event.target.name === 'sankhya') {
      values[index].form7months.sankhya = event.target.value;
    } else if (event.target.name === 'pratikul') {
      values[index].form7months.pratikul = event.target.value;
    } else if (event.target.name === 'pragati') {
      values[index].form7months.pragati = event.target.value;
    } else if (event.target.name === 'pragatipercent') {
      values[index].form7months.pragatipercent = event.target.value;
    } else {
      values[index].form7months.kaifiyat = event.target.value;
    }

    setInputFields(values);
    setform7Inputs({ ...form7Inputs, form7collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      prayogsala: '',
      form7months: {
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
        sankhya: 0,
        pratikul: 0,
        pragati: 0,
        pragatipercent: 0,
        kaifiyat: '',
      },
    });
    setInputFields(values);
    setform7Inputs({ ...form7Inputs, form7months: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setform7Inputs({ ...form7Inputs, form7months: values });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${api}/api/form7s`, {
        data: form7Inputs,
      })
      .then((response) => {
        setform7Inputs(initialFormState);
        setInputFields([
          {
            prayogsala: '',
            form7months: {
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
              sankhya: '',
              pratikul: '',
              pragati: '',
              pragatipercent: '',
              kaifiyat: '',
            },
          },
        ]);
        successNotification();
        fetchform7();
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
    console.log('form7Inputs', form7Inputs);
  }, [form7Inputs]);

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>
          {' '}
          खाद्य तथा दाना नमुना विश्लेषण विवरण
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
              value={form7Inputs.karyalaya}
              onChange={(e) =>
                setform7Inputs({
                  ...form7Inputs,
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
              value={form7Inputs.karyalaya}
              onChange={(e) =>
                setform7Inputs({
                  ...form7Inputs,
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
              value={form7Inputs.arthikbarsha}
              onChange={(e) =>
                setform7Inputs({
                  ...form7Inputs,
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
              value={form7Inputs.date}
              onChange={(value) => {
                const adDate = bsToAd(value);

                const newtimestamp = Date.parse(adDate);

                setform7Inputs({
                  ...form7Inputs,
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
                <div className='flex mb-3'>
                  <select
                    id='countries'
                    name='prayogsala'
                    className='mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    required
                    value={inputField.prayogsala}
                    onChange={(event) => handleInputChange(index, event)}
                  >
                    <option value='' selected disabled>
                      एउटा छान्नुहोस्
                    </option>
                    <option value='खाद्य नमुना विश्लेषण (खाद्य तथा दाना ऐन/नियम बमोजिम संकलित)'>
                      खाद्य नमुना विश्लेषण (खाद्य तथा दाना ऐन/नियम बमोजिम
                      संकलित)
                    </option>
                    <option value='दुध तथा दुध पदार्थ'>
                      दुध तथा दुध पदार्थ
                    </option>
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
                    <option value=' मासु तथा मासुजन्य'>
                      मासु तथा मासुजन्य
                    </option>
                    <option value='दाना'>दाना</option>

                    <option value='अन्य'>अन्य</option>
                  </select>
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
                      value={inputField.form7months.shrawan}
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
                      value={inputField.form7months.bhadra}
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
                      value={inputField.form7months.ashwin}
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
                      value={inputField.form7months.kartik}
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
                      value={inputField.form7months.mangsir}
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
                      value={inputField.form7months.poush}
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
                      value={inputField.form7months.magh}
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
                      value={inputField.form7months.falgun}
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
                      value={inputField.form7months.chaitra}
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
                      value={inputField.form7months.baisakh}
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
                      value={inputField.form7months.jestha}
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
                      value={inputField.form7months.ashar}
                      placeholder='असार'
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </div>
                </div>
                <div className='flex flex-wrap md:flex-row flex-col'>
                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      नमुना विश्लेषण संख्या
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='sankhya'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='पटक'
                      value={inputField.form7months.sankhya}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>

                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      प्रतिकुल
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='pratikul'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='संख्या'
                      value={inputField.form7months.pratikul}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      हालसम्मको प्रगति
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='pragati'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='संख्या'
                      value={inputField.form7months.pragati}
                      onChange={(event) => handleInputChange(index, event)}
                      required
                    />
                  </div>
                  <div className='mr-5 mb-6'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      हालसम्मको प्रगति %
                    </label>
                    <input
                      type='number'
                      min={0}
                      name='pragatipercent'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                      placeholder='संख्या'
                      value={inputField.form7months.pragatipercent}
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
                      value={inputField.form7months.kaifiyat}
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
            !form7Inputs.karyalaya ||
            !form7Inputs.arthikbarsha ||
            form7Inputs.date === '' ||
            inputFields.prayogsala == ''
          }
        >
          पेश गर्नुहोस्
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default Form7;
