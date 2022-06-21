import { useContext, useEffect, useState } from 'react';
import nepalsarkarlogo from '../Assets/nepalsarkarlogo.png';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../ContextAPI/data';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ showNav, setshowNav }) => {
  const [dropdown1, setdropdown1] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const [dropdown3, setdropdown3] = useState(false);
  const [dropdown4, setdropdown4] = useState(false);
  const [dropdown5, setdropdown5] = useState(false);
  const [dropdown6, setdropdown6] = useState(false);
  const [dropdown7, setdropdown7] = useState(false);
  const [dropdown8, setdropdown8] = useState(false);
  const [dropdown9, setdropdown9] = useState(false);
  const [dropdown10, setdropdown10] = useState(false);
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const location = useLocation();

  return (
    <>
      <div
        className={`${
          showNav ? 'block' : 'hidden'
        } lg:block z-[2] w-[100%] lg:w-[20%] mt-[6vh] lg:mt-0 h-full fixed overflow-y-auto py-4 px-3 bg-gray-200 dark:bg-gray-800`}
      >
        <div className='hidden lg:flex justify-center mb-5'>
          <img src={nepalsarkarlogo} height={100} width={100} alt='' />
        </div>
        <ul className='space-y-2'>
          <li>
            <NavLink
              to='/admin/dashboard'
              onClick={() => setshowNav(!showNav)}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
              </svg>
              <span className='ml-3'>ड्यासबोर्ड </span>
            </NavLink>
          </li>

          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown1(!dropdown1)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                खाद्य ऐन/नियम बमोजिम संकलित नमुना विवरण
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown1 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form1'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form1report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown2(!dropdown2)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                निरीक्षण अनुगमन विवरण
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown2 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form3'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form3report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown3(!dropdown3)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                होटल स्तरीकरण लोगो वितरण सम्बन्धि विवरण
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown3 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form5'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form5report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown4(!dropdown4)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                खाद्य तथा दाना नमुना विश्लेषण विवरण
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown4 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form7'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form7report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown5(!dropdown5)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                प्रयोगशाला विश्लेषण प्रतिवेदन सारांश
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown5 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form10'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form10report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown6(!dropdown6)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                आयात निर्यात गुण प्रमाणिकरण
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown6 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form11'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form11report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown7(!dropdown7)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                मुद्दा दायरी विवरण
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown7 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form15'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form15report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown8(!dropdown8)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                खाद्य तथा दाना अनुज्ञा पत्र जारी/नविकरण/उद्योग सिफारिस
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown8 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form16'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form16report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown9(!dropdown9)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                उजुरी/गुनासो ब्येवस्थापन
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown9 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form19'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form19report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <button
              type='button'
              className='flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
              onClick={() => setdropdown10(!dropdown10)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' />
              </svg>
              <span
                className='flex-1 ml-3 text-left text-sm break-words'
                sidebar-toggle-item=''
              >
                खाद्य प्रसोधन, खाद्य पोषण, उद्योग, होटेल, पत्रकार, कार्यशाला आदि
              </span>
              <svg
                sidebar-toggle-item=''
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>

            <ul className={`${dropdown10 ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                <NavLink
                  to='/admin/form21'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  नया इन्ट्री
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/admin/form21report'
                  onClick={() => {
                    setshowNav(!showNav);
                  }}
                  className='flex items-center p-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                >
                  रिपोर्ट
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to='/admin/settings'
              onClick={() => setshowNav(!showNav)}
              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-3'>सेटिङ</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
