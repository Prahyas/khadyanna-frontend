import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../ContextAPI/data';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditForm1Modal = ({ editModal, setEditModal, form1id, attributes }) => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const { fetchform1Function } = useContext(DataContext);
  const { fetchform1 } = fetchform1Function;
  const [inputFields, setInputFields] = useState([...attributes.collection]);
  const initialFormState = {
    year: attributes.year,
    aawo: attributes.aawo,
    karyalaya: attributes.karyalaya,
    collection: attributes.collection,
  };

  const [form1Inputs, setform1Inputs] = useState(initialFormState);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'khadyanna') {
      values[index].khadyanna = event.target.value;
    } else if (event.target.name === 'shrawan') {
      values[index].months.shrawan = event.target.value;
    } else if (event.target.name === 'bhadra') {
      values[index].months.bhadra = event.target.value;
    } else if (event.target.name === 'ashwin') {
      values[index].months.ashwin = event.target.value;
    } else if (event.target.name === 'kartik') {
      values[index].months.kartik = event.target.value;
    } else if (event.target.name === 'mangsir') {
      values[index].months.mangsir = event.target.value;
    } else if (event.target.name === 'poush') {
      values[index].months.poush = event.target.value;
    } else if (event.target.name === 'magh') {
      values[index].months.magh = event.target.value;
    } else if (event.target.name === 'falgun') {
      values[index].months.falgun = event.target.value;
    } else if (event.target.name === 'chaitra') {
      values[index].months.chaitra = event.target.value;
    } else if (event.target.name === 'baisakh') {
      values[index].months.baisakh = event.target.value;
    } else if (event.target.name === 'jestha') {
      values[index].months.jestha = event.target.value;
    } else {
      values[index].months.ashar = event.target.value;
    }

    setInputFields(values);
    setform1Inputs({ ...form1Inputs, collection: values });
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      khadyanna: '',
      months: {
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
    setform1Inputs({ ...form1Inputs, months: values });
  };

  const handleRemoveFields = (index) => {
    console.log('index', index);
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    setform1Inputs({ ...form1Inputs, months: values });
  };

  const successNotification = () =>
    toast.success('Data successfully submitted', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotification = () => {
    toast.error('Error, data not submitted', {
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
    console.log('form1Inputs', form1Inputs);
    console.log('form1id', form1id);
  }, [form1Inputs, form1id]);

  const onSubmit = async (e, form1id) => {
    e.preventDefault();
    await axios
      .put(`${api}/api/form1s/${form1id}`, {
        data: form1Inputs,
      })
      .then((response) => {
        setform1Inputs(initialFormState);
        successNotification();
        setInterval(() => {
          setEditModal(false);
          fetchform1();
        }, 1500);
      })
      .catch((error) => {
        errorNotification();
      });
  };

  useEffect(() => {
    console.log('attributes', attributes);
  }, [attributes]);

  return (
    <div class=' bg-rgba overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 flex justify-center items-center h-full '>
      <div class='relative px-4 w-full max-w-2xl h-full pt-10'>
        <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div class='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
            <h3 class='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
              फारम नं १ सच्याउनुहोस्
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

          <div class='p-6 space-y-6'>
            <form>
              <div className='flex flex-wrap md:flex-row flex-col'>
                <div className='mr-5 mb-6  grow'>
                  <label
                    htmlFor='text'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    कार्यालय
                  </label>
                  <input
                    type='text'
                    id='text'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='कार्यालय'
                    value={form1Inputs.karyalaya}
                    onChange={(e) =>
                      setform1Inputs({
                        ...form1Inputs,
                        karyalaya: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className='mb-6 grow md:mr-5'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    आ . ब
                  </label>
                  <input
                    type='text'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='आ . ब'
                    value={form1Inputs.aawo}
                    onChange={(e) =>
                      setform1Inputs({
                        ...form1Inputs,
                        aawo: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className='mb-6 grow md:mr-5'>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    आर्थिक बर्ष
                  </label>
                  <input
                    type='text'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                    placeholder='आर्थिक बर्ष'
                    value={form1Inputs.year}
                    onChange={(e) =>
                      setform1Inputs({
                        ...form1Inputs,
                        year: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              <hr className='mb-5' />
              <div className='mb-6'>
                <div className='flex justify-between items-center mb-2'>
                  <label
                    htmlFor='text'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    महिना
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
                          name='khadyanna'
                          className='mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          value={inputField.khadyanna}
                          onChange={(event) => handleInputChange(index, event)}
                        >
                          <option value='' selected disabled>
                            एउटा छान्नुहोस्
                          </option>
                          <option value='Dudh tatha dudh padartha'>
                            दुध तथा दुध पदार्थ
                          </option>
                          <option value='Teltahta gheu janya'>
                            तेल तथा घेउ जन्य
                          </option>
                          <option value='Teltahta gheu janya'>
                            फल तथा सागपात
                          </option>
                          <option value='Teltahta gheu janya'>मसला</option>
                          <option value='Teltahta gheu janya'>चिया, कफि</option>
                          <option value='Teltahta gheu janya'>नुन</option>
                          <option value='Teltahta gheu janya'>
                            खाद्यान्न दलहन र सोबाट बनेको
                          </option>
                          <option value='Teltahta gheu janya'>
                            प्र. पिउने पानी
                          </option>
                          <option value='Teltahta gheu janya'>
                            गुलियो पदार्थ
                          </option>
                          <option value='Teltahta gheu janya'>
                            कन्फेक्सनरी
                          </option>
                          <option value='Teltahta gheu janya'>
                            मासु तथा मासुजन्य
                          </option>
                          <option value='Teltahta gheu janya'>दाना</option>
                          <option value='Teltahta gheu janya'>दाना</option>
                          <option value='Teltahta gheu janya'>अन्य</option>
                          <option value='Fal tatha saagpat'>
                            Fal tatha saagpat
                          </option>
                          {/* {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.attributes.name}
              </option>
            ))} */}
                        </select>

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

                      <div className='flex mb-3 space-x-3'>
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='shrawan'
                          value={inputField.months.shrawan}
                          placeholder='श्रावण'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='bhadra'
                          value={inputField.months.bhadra}
                          placeholder='भदौ'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='ashwin'
                          value={inputField.months.ashwin}
                          placeholder='आश्विन'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='kartik'
                          value={inputField.months.kartik}
                          placeholder='कार्तिक'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='mangsir'
                          value={inputField.months.mangsir}
                          placeholder='मंसिर'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='poush'
                          value={inputField.months.poush}
                          placeholder='पुष'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </div>

                      <div className='flex mb-3 space-x-3'>
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='magh'
                          value={inputField.months.magh}
                          placeholder='माघ'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='falgun'
                          value={inputField.months.falgun}
                          placeholder='फाल्गुन'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='chaitra'
                          value={inputField.months.chaitra}
                          placeholder='चैत्र'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='baisakh'
                          value={inputField.months.baisakh}
                          placeholder='बैशाख'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='jestha'
                          value={inputField.months.jestha}
                          placeholder='जेठ'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                        <input
                          type='number'
                          className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                          name='ashar'
                          value={inputField.months.ashar}
                          placeholder='असार'
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type='submit'
                onClick={(e) => {
                  onSubmit(e, form1id);
                }}
                className='text-white disabled:opacity-75 disabled:cursor-not-allowed bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Submit
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditForm1Modal;
