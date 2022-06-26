import React, { useState, useEffect, useContext, useRef } from 'react';
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import ReactToPrint from 'react-to-print';
import { DataContext } from '../../../ContextAPI/data';

const SingleuserListDetail = ({
  form30id,
  selectedForm30,
  attributes,
  reportModal,
  setreportModal,
}) => {
  return (
    <>
      <div class=' bg-rgba overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-0 z-50 flex justify-center items-center h-full '>
        <div class='relative px-4 w-full max-w-full h-full pt-5'>
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div class='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
              <h3 class='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
                प्रयोगकर्ताको विवरण
              </h3>
              <div className='flex'>
                <button
                  type='button'
                  class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  onClick={() => setreportModal(false)}
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

            <div class='p-6 space-y-10'>
              <div className='mb-5 flex justify-around text-black '>
                <div className='flex flex-col'>
                  <span>नाम : {attributes.username}</span>
                </div>
                <div className='flex flex-col'>
                  <span className='mb-2'> इमेल : {attributes.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleuserListDetail;
