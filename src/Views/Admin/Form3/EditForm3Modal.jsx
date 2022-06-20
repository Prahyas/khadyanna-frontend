import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../ContextAPI/data';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import 'nepali-datepicker-reactjs/dist/index.css';
import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';

const EditForm3Modal = ({ editModal, setEditModal, form3id, attributes }) => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { fetchform3Function } = useContext(DataContext);
  const { fetchform3 } = fetchform3Function;
  const [inputFields, setInputFields] = useState([
    ...attributes.form3collection,
  ]);
  const initialFormState = {
    date: attributes.date,
    timecode: parseInt(attributes.timecode),
    arthikbarsha: attributes.arthikbarsha,
    karyalaya: attributes.karyalaya,
    saptaha: attributes.saptaha,
    form3collection: attributes.form3collection,
  };

  const [form3Inputs, setform3Inputs] = useState(initialFormState);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'bibaran') {
      values[index].bibaran = event.target.value;
    } else if (event.target.name === 'shrawan') {
      values[index].form3months.shrawan = event.target.value;
    } else if (event.target.name === 'bhadra') {
      values[index].form3months.bhadra = event.target.value;
    } else if (event.target.name === 'ashwin') {
      values[index].form3months.ashwin = event.target.value;
    } else if (event.target.name === 'kartik') {
      values[index].form3months.kartik = event.target.value;
    } else if (event.target.name === 'mangsir') {
      values[index].form3months.mangsir = event.target.value;
    } else if (event.target.name === 'poush') {
      values[index].form3months.poush = event.target.value;
    } else if (event.target.name === 'magh') {
      values[index].form3months.magh = event.target.value;
    } else if (event.target.name === 'falgun') {
      values[index].form3months.falgun = event.target.value;
    } else if (event.target.name === 'chaitra') {
      values[index].form3months.chaitra = event.target.value;
    } else if (event.target.name === 'baisakh') {
      values[index].form3months.baisakh = event.target.value;
    } else if (event.target.name === 'jestha') {
      values[index].form3months.jestha = event.target.value;
    } else if (event.target.name === 'ashar') {
      values[index].form3months.ashar = event.target.value;
    } else if (event.target.name === 'sankhya') {
      values[index].form3months.sankhya = event.target.value;
    } else if (event.target.name === 'patak') {
      values[index].form3months.patak = event.target.value;
    } else {
      values[index].form3months.kaifiyat = event.target.value;
    }

    setInputFields(values);
    setform3Inputs({ ...form3Inputs, form3collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      bibaran: '',
      form3months: {
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
        patak: 0,
        kaifiyat: '',
      },
    });
    setInputFields(values);
    setform3Inputs({ ...form3Inputs, form3months: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    if (values.length > 1) {
      values.splice(index, 1);
    }
    setInputFields(values);
    setform3Inputs({ ...form3Inputs, form3months: values });
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

  const onSubmit = async (form3id) => {
    try {
      await axios.put(`${api}/api/form3s/${form3id}`, {
        data: form3Inputs,
      });
      setform3Inputs(initialFormState);
      successNotification();
      fetchform3();
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
              निरीक्षण अनुगमन विवरण
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
                  value={form3Inputs.karyalaya}
                  onChange={(e) =>
                    setform3Inputs({
                      ...form3Inputs,
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
              value={form3Inputs.karyalaya}
              onChange={(e) =>
                setform3Inputs({
                  ...form3Inputs,
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
                  value={form3Inputs.arthikbarsha}
                  onChange={(e) =>
                    setform3Inputs({
                      ...form3Inputs,
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
                  value={form3Inputs.date}
                  onChange={(value) => {
                    const adDate = bsToAd(value);

                    const newtimestamp = Date.parse(adDate);

                    setform3Inputs({
                      ...form3Inputs,
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
              value={form3Inputs.date}
              onChange={(e) =>
                setform3Inputs({
                  ...form3Inputs,
                  date: e.target.value,
                })
              }
              required
            /> */}
              </div>
              <div className='mr-5 mb-6'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  सप्ताह
                </label>
                <input
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                  placeholder='सप्ताह'
                  value={form3Inputs.saptaha}
                  onChange={(e) =>
                    setform3Inputs({
                      ...form3Inputs,
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
                      <option value='उद्योग'>उद्योग</option>
                      <option value='पसल'>पसल</option>
                      <option value='सुपरमार्केट'>सुपरमार्केट</option>
                      <option value='गोदाम'>गोदाम</option>
                      <option value='होटल, रेस्टुरेन्ट, मिठाई पसल आदी '>
                        होटल, रेस्टुरेन्ट, मिठाई पसल आदी{' '}
                      </option>
                      <option value='दाना पदार्थ'>दाना पदार्थ</option>
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
                          value={inputField.form3months.shrawan}
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
                          value={inputField.form3months.bhadra}
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
                          value={inputField.form3months.ashwin}
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
                          value={inputField.form3months.kartik}
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
                          value={inputField.form3months.mangsir}
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
                          value={inputField.form3months.poush}
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
                          value={inputField.form3months.magh}
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
                          value={inputField.form3months.falgun}
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
                          value={inputField.form3months.chaitra}
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
                          value={inputField.form3months.baisakh}
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
                          value={inputField.form3months.jestha}
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
                          value={inputField.form3months.ashar}
                          placeholder='असार'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </div>
                    </div>
                    <div className='flex flex-wrap md:flex-row flex-col'>
                      <div className='mr-5 mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          पटक
                        </label>
                        <input
                          type='number'
                          min={0}
                          name='patak'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          placeholder='पटक'
                          value={inputField.form3months.patak}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>

                      <div className='mr-5 mb-6'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          संख्या
                        </label>
                        <input
                          type='number'
                          min={0}
                          name='sankhya'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          placeholder='संख्या'
                          value={inputField.form3months.sankhya}
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
                          value={inputField.form3months.kaifiyat}
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
                onSubmit(form3id);
              }}
              className='mr-2 text-white disabled:opacity-75 disabled:cursor-not-allowed bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              disabled={
                !form3Inputs.karyalaya ||
                !form3Inputs.arthikbarsha ||
                form3Inputs.date === '' ||
                inputFields.khadyanna == ''
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

export default EditForm3Modal;
