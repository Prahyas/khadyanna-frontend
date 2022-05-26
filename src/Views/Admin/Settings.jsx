import React, { useContext, useEffect, useState } from 'react';

import { DataContext } from '../../ContextAPI/data';
import AddDepartmentModal from '../../Components/DepartmentModals/AddDepartmentModal';
import EditDepartmentModal from '../../Components/DepartmentModals/EditDepartmentModal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const { departmentsData } = useContext(DataContext);
  const [departments, setDepartments] = departmentsData;
  const [editDepartmentData, seteditDepartmentData] = useState(null);
  const { fetchDepartmentsFunction } = useContext(DataContext);
  const { fetchDepartments } = fetchDepartmentsFunction;

  const { foodsData } = useContext(DataContext);
  const [foods, setFoods] = foodsData;

  useEffect(() => {
    console.log('foods', foods);
  }, [foods]);

  const addDepartments = async (newDepartmentData) => {
    await axios
      .post(`${api}/api/departments`, {
        data: newDepartmentData,
      })
      .then((response) => {
        successNotification();
        setInterval(() => {
          setAddModal(false);
          // setDepartments([...departments, response.data.data]);
          // fetchDepartments();
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        errorNotification();
      });
  };

  const editRow = (department) => {
    seteditDepartmentData({
      name: department.attributes.name,
      type: department.attributes.type,
      description: department.attributes.description,
    });
  };

  const updateDepartments = async (
    updateDepartmentId,
    editedDepartmentData
  ) => {
    console.log('id, data', updateDepartmentId, editedDepartmentData);
    await axios
      .put(`${api}/api/departments/${updateDepartmentId}`, {
        data: editedDepartmentData,
      })
      .then((response) => {
        successNotification();
        setInterval(() => {
          setEditModal(false);
          // setDepartments([response.data.data]);
          // fetchDepartments();
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        errorNotification();
      });
  };

  const deleteDepartment = async (deleteDepartmentId) => {
    const response = await axios.delete(
      `${api}/api/departments/${deleteDepartmentId}`
    );
    if (response) {
      deleteNotification();
      setInterval(() => {
        window.location.reload();
      }, 1500);
    }
  };

  const successNotification = () =>
    toast.success('Added successfully', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const deleteNotification = () =>
    toast.success('Successfully delete.', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotification = () => {
    toast.error('Error, something went wrong', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const singlefood = [foods.slice(-1)[0]];
  console.log('singlefood', singlefood);

  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>सेटिङ </p>
      </div>
      <hr className='mb-5' />

      <div className='p-2'>
        {/* <div className='flex justify-between mb-2'>
          <p class='text-xl dark:text-white'>शाखा</p>

          <button
            type='button'
            onClick={() => setAddModal(true)}
            class='py-2 px-3 text-xs font-medium text-center text-white bg-red-700 rounded-lg'
          >
            नया शाखा थप्नुह्स
          </button>
          {addModal ? (
            <AddDepartmentModal
              addModal={addModal}
              setAddModal={setAddModal}
              addDepartments={addDepartments}
            />
          ) : null}
        </div> */}

        <hr className='mb-5' />
        {/* <div class=' overflow-x-auto shadow-md sm:rounded-lg'>
          <table class='table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' class='px-6 py-3'>
                  स.नं.
                </th>
                <th scope='col' class='px-6 py-3'>
                  शाखाको नाम
                </th>

                <th scope='col' class='px-6 py-3'>
                  प्रकार
                </th>
                <th scope='col' class='px-6 py-3'>
                  विवरण
                </th>

                <th scope='col' class='px-6 py-3'>
                  <span class='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => {
                return (
                  <tr
                    key={department.id}
                    class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'
                  >
                    <th
                      scope='row'
                      class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                    >
                      {department.id}
                    </th>
                    <td class='px-6 py-4'>{department.attributes.name}</td>
                    <td class='px-6 py-4'>{department.attributes.type}</td>

                    <td class='px-6 py-4'>
                      {department.attributes.description}
                    </td>

                    <td class='flex justify-end px-4 py-4 text-right'>
                      <a
                        onClick={() => {
                          setEditModal(true);
                          editRow(department);
                        }}
                        class='mr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                          <path
                            fill-rule='evenodd'
                            d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </a>

                      {editModal ? (
                        <EditDepartmentModal
                          editModal={editModal}
                          setEditModal={setEditModal}
                          id={department.id}
                          editDepartmentData={editDepartmentData}
                          seteditDepartmentData={seteditDepartmentData}
                          updateDepartments={updateDepartments}
                        />
                      ) : null}
                      <a
                        onClick={() => {
                          deleteDepartment(department.id);
                        }}
                        class='font-medium text-red-600 dark:text-blue-500 hover:underline'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          class='h-5 w-5'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                            clip-rule='evenodd'
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <ToastContainer />
        </div> */}
        <br />
        <br />
        <br />
        <div class=' overflow-x-auto shadow-md sm:rounded-lg'>
          {singlefood.map((food1) => {
            return (
              <>
                <div>
                  {' '}
                  <span>{food1.attributes.year}</span>
                </div>
                <div>
                  {' '}
                  <span>{food1.attributes.karyalaya}</span>
                </div>
                <table class='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                  <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                      <th scope='col' class='px-10 py-3'>
                        खाद्य समूह
                      </th>
                      {/* <th scope='col' class='px-10 py-3'>
                    श्रावण
                  </th>
                  <th scope='col' class='px-10 py-3'>
                    भदौ
                  </th>
                  <th scope='col' class='px-10 py-3'>
                    आश्विन
                  </th>
                  <th scope='col' class='px-10 py-3'>
                    कार्तिक
                  </th>
                  <th scope='col' class='px-10 py-3'>
                    मंसिर
                  </th>
                  <th scope='col' class='px-10 py-3'>
                    पुष
                  </th>
                  <th scope='col' class='px-10 py-3'>
                    माघ
                  </th>
                  <th scope='col' class='px-10 py-3'>
                    फाल्गुन
                  </th>
                  <th scope='col' class='px-10 py-3'>
                    चैत्र
                  </th> */}
                      <th scope='col' class='px-10 py-3'>
                        बैशाख
                      </th>
                      <th scope='col' class='px-10 py-3'>
                        जेठ
                      </th>
                      <th scope='col' class='px-10 py-3'>
                        असार
                      </th>
                      <th scope='col' class='px-10 py-3'>
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {food1.attributes.data.map((food2) => {
                      const month = food2.months;
                      const { id, ...onlyMonths } = month;
                      console.log(onlyMonths);

                      const total = Object.values(onlyMonths).reduce(
                        (t, n) => parseInt(t) + parseInt(n)
                      );

                      return (
                        <>
                          <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                            <th
                              scope='row'
                              class='px-10 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                            >
                              {food2.khadyanna}
                            </th>
                            <td class='px-10 py-4'>{food2.months.baisakh}</td>
                            <td class='px-10 py-4'>{food2.months.jestha}</td>
                            <td class='px-10 py-4'>{food2.months.ashar}</td>
                            <td class='px-10 py-4'>{total}</td>
                          </tr>
                        </>
                      );
                    })}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                      <th
                        scope='row'
                        class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                      >
                        दुध तथा दुध पदार्थ
                      </th>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                    </tr>
                    <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th
                        scope='row'
                        class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                      >
                        तेल तथा घिउ जन्य
                      </th>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                    </tr>
                    <tr class='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
                      <th
                        scope='row'
                        class='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                      >
                        फल तथा सागपात
                      </th>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                      <td class='px-6 py-4'>
                        {' '}
                        <input
                          type='text'
                          id='text'
                          class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
                          required
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Settings;
