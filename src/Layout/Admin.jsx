import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Views/Admin/Dashboard';
import Details from '../Views/Admin/Details';
import Settings from '../Views/Admin/Settings';
import Form1 from '../Views/Admin/Form1/Form1';
import Form1Report from '../Views/Admin/Form1/Form1Report';
import { DataContext } from '../ContextAPI/data';
import NotFound from '../Components/NotFound';

const Admin = () => {
  const [showNav, setshowNav] = useState(false);
  const { currentUserData } = useContext(DataContext);
  const [currentUser, setcurrentUser] = currentUserData;

  useEffect(() => {
    console.log('currentUser', currentUser);
  }, [currentUser]);

  return (
    <>
      <Sidebar showNav={showNav} setshowNav={setshowNav} />

      <Navbar showNav={showNav} setshowNav={setshowNav} />

      <div className='bg-gray-100 lg:ml-[20%] w-[100%] lg:w-[80%] min-h-screen p-6'>
        <div className='mt-14'>
          {currentUser === null ? (
            <>
              <Routes>
                <Route
                  path='*'
                  element={
                    <NotFound
                      errorTitle={`Sorry`}
                      errorMsg={`You are not authorized to access this page.`}
                    />
                  }
                />
              </Routes>
            </>
          ) : (
            <>
              <Routes>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='form1' element={<Form1 />} />
                <Route path='form1report' element={<Form1Report />} />
                <Route path='settings' element={<Settings />} />
              </Routes>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
