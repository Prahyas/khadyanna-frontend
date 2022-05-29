import React, { useContext, useEffect, useState } from 'react';

import { DataContext } from '../../ContextAPI/data';
import AddDepartmentModal from '../../Components/DepartmentModals/AddDepartmentModal';
import EditDepartmentModal from '../../Components/DepartmentModals/EditDepartmentModal';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
  return (
    <>
      <div className='mb-2'>
        <p className='text-2xl dark:text-white'>सेटिङ </p>
      </div>
      <hr className='mb-5' />

      <div className='p-2'>सेटिङ</div>
    </>
  );
};

export default Settings;
