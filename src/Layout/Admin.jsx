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
import NoAuthorization from '../Views/Admin/NoAuthorization';

const Admin = () => {
  const [showNav, setshowNav] = useState(false);
  const { currentUserData } = useContext(DataContext);
  const [currentUser, setcurrentUser] = currentUserData;

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
                {currentUser.user.department === 'PS' ? (
                  <>
                    <Route path='form1' element={<Form1 />} />
                    <Route path='form1report' element={<Form1Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form1'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form1report'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                  </>
                )}
                {currentUser.user.department === 'PS' ? (
                  <>
                    <Route path='form2' element={<Form1 />} />
                    <Route path='form2report' element={<Form1Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form2'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form2report'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                  </>
                )}
                {/* <Route path='form2' element={<Form2 />} />
                <Route path='form2report' element={<Form2Report />} /> */}
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
