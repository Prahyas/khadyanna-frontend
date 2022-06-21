import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../ContextAPI/data';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NepaliDatePicker } from 'nepali-datepicker-reactjs';
import 'nepali-datepicker-reactjs/dist/index.css';
import { adToBs, bsToAd } from '@sbmdkl/nepali-date-converter';

const EditForm21Modal = ({ editModal, setEditModal, form21id, attributes }) => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { fetchform21Function } = useContext(DataContext);
  const { fetchform21 } = fetchform21Function;
  const [inputFields, setInputFields] = useState([
    ...attributes.form21collection,
  ]);
  const initialFormState = {
    date: attributes.date,
    timecode: parseInt(attributes.timecode),
    arthikbarsha: attributes.arthikbarsha,
    karyalaya: attributes.karyalaya,
    form21collection: attributes.form21collection,
  };

  const [form21Inputs, setform21Inputs] = useState(initialFormState);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'sanchalanmiti') {
      values[index].form21months.sanchalanmiti = event.target.value;
    } else if (event.target.name === 'nam') {
      values[index].form21months.nam = event.target.value;
    } else if (event.target.name === 'sthan') {
      values[index].form21months.sthan = event.target.value;
    } else if (event.target.name === 'mahila') {
      values[index].form21months.mahila = event.target.value;
    } else if (event.target.name === 'purush') {
      values[index].form21months.purush = event.target.value;
    } else if (event.target.name === 'dalit') {
      values[index].form21months.dalit = event.target.value;
    } else if (event.target.name === 'janjati') {
      values[index].form21months.janjati = event.target.value;
    } else if (event.target.name === 'anya') {
      values[index].form21months.anya = event.target.value;
    } else if (event.target.name === 'bipanna') {
      values[index].form21months.bipanna = event.target.value;
    } else if (event.target.name === 'anya2') {
      values[index].form21months.anya2 = event.target.value;
    } else if (event.target.name === 'namnum') {
      values[index].form21months.namnum = event.target.value;
    } else if (event.target.name === 'nikaya') {
      values[index].form21months.nikaya = event.target.value;
    } else if (event.target.name === 'prasixyak') {
      values[index].form21months.prasixyak = event.target.value;
    } else if (event.target.name === 'bisayabastu') {
      values[index].form21months.bisayabastu = event.target.value;
    } else {
      values[index].form21months.kaifiyat = event.target.value;
    }

    setInputFields(values);
    setform21Inputs({ ...form21Inputs, form21collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      khadyanna: '',
      form21months: {
        sanchalanmiti: '',
        nam: '',
        sthan: '',
        mahila: 0,
        purush: 0,
        dalit: 0,
        janjati: 0,
        anya: 0,
        bipanna: 0,
        anya2: 0,
        namnum: '',
        nikaya: '',
        prasixyak: '',
        bisayabastu: '',
        kaifiyat: '',
      },
    });
    setInputFields(values);
    setform21Inputs({ ...form21Inputs, form21months: values });
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    if (values.length > 1) {
      values.splice(index, 1);
    }
    setInputFields(values);
    setform21Inputs({ ...form21Inputs, form21months: values });
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

  const onSubmit = async (form21id) => {
    try {
      await axios.put(`${api}/api/form21s/${form21id}`, {
        data: form21Inputs,
      });
      setform21Inputs(initialFormState);
      successNotification();
      fetchform21();
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
              प्रयोगशाला विश्लेषण प्रतिवेदन सारांश
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
                  value={form21Inputs.karyalaya}
                  onChange={(e) =>
                    setform21Inputs({
                      ...form21Inputs,
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
              value={form21Inputs.karyalaya}
              onChange={(e) =>
                setform21Inputs({
                  ...form21Inputs,
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
                  value={form21Inputs.arthikbarsha}
                  onChange={(e) =>
                    setform21Inputs({
                      ...form21Inputs,
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
                  value={form21Inputs.date}
                  onChange={(value) => {
                    const adDate = bsToAd(value);

                    const newtimestamp = Date.parse(adDate);

                    setform21Inputs({
                      ...form21Inputs,
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
                      <div className='mr-5 mb-5 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          कार्यक्रम संचालन मिति/अवधि
                        </label>
                        <NepaliDatePicker
                          inputClassName='form-control'
                          className='mb-6'
                          value={inputField.form21months.sanchalanmiti}
                          onChange={(value) => {
                            const adDate = bsToAd(value);
                            const newtimestamp = Date.parse(adDate);
                            setInputFields([
                              {
                                form21months: {
                                  ...inputField.form21months,
                                  sanchalanmiti: value,
                                },
                              },
                            ]);
                          }}
                          options={{ calenderLocale: 'ne', valueLocale: 'en' }}
                        />
                      </div>

                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          कार्यक्रमको नाम
                        </label>
                        <input
                          name='nam'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.nam}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          कार्यक्रम संचालन स्थान
                        </label>
                        <input
                          name='sthan'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.sthan}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                    </div>
                    <div className='flex flex-wrap md:flex-row flex-col'>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          लैङगिक सहभागिता(महिला)
                        </label>
                        <input
                          type='number'
                          min={0}
                          name='mahila'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.mahila}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          लैङगिक सहभागिता(पुरुष)
                        </label>
                        <input
                          type='number'
                          min={0}
                          name='purush'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.purush}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                    </div>
                    <div className='flex flex-wrap md:flex-row flex-col'>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          सामाजिक समाबेशी सहभागिता संख्या(दलित)
                        </label>
                        <input
                          type='number'
                          min={0}
                          name='dalit'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.dalit}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          सामाजिक समाबेशी सहभागिता संख्या(जनजाती)
                        </label>
                        <input
                          type='number'
                          min={0}
                          name='janjati'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.janjati}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          सामाजिक समाबेशी सहभागिता संख्या(अन्य)
                        </label>
                        <input
                          type='number'
                          min={0}
                          name='anya'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.anya}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                    </div>
                    <div className='flex flex-wrap md:flex-row flex-col'></div>
                    <div className='flex flex-wrap md:flex-row flex-col'>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          आर्थिक सहभागिता(बिपन्न)
                        </label>
                        <input
                          type='number'
                          min={0}
                          name='bipanna'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.bipanna}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          आर्थिक सहभागिता(अन्य)
                        </label>
                        <input
                          type='number'
                          min={0}
                          name='anya2'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.anya2}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                    </div>
                    <div className='flex flex-wrap md:flex-row flex-col'>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          कार्यक्रम संयोजक नाम फोन नं
                        </label>
                        <input
                          type='text'
                          name='namnum'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.namnum}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          उपस्थित निकायहरु
                        </label>
                        <input
                          type='text'
                          name='nikaya'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.nikaya}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          प्रसिक्ष्यक
                        </label>
                        <input
                          type='text'
                          name='prasixyak'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.prasixyak}
                          onChange={(event) => handleInputChange(index, event)}
                          required
                        />
                      </div>
                    </div>
                    <div className='flex flex-wrap md:flex-row flex-col'>
                      <div className='mr-5 mb-6 grow'>
                        <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                          कार्यक्रम/कार्यपत्रमा समेटिएका बिषयबस्तु
                        </label>
                        <input
                          type='text'
                          name='bisayabastu'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          value={inputField.form21months.bisayabastu}
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
                          value={inputField.form21months.kaifiyat}
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
                onSubmit(form21id);
              }}
              className='mr-2 text-white disabled:opacity-75 disabled:cursor-not-allowed bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              disabled={
                !form21Inputs.karyalaya ||
                !form21Inputs.arthikbarsha ||
                form21Inputs.date === '' ||
                inputFields.prayogsala == ''
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

export default EditForm21Modal;
