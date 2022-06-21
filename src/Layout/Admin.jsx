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
import Form3 from '../Views/Admin/Form3/Form3';
import Form3Report from '../Views/Admin/Form3/Form3Report';
import Form5 from '../Views/Admin/Form5/Form5';
import Form5Report from '../Views/Admin/Form5/Form5Report';
import Form7 from '../Views/Admin/Form7/Form7';
import Form7Report from '../Views/Admin/Form7/Form7Report';
import Form10 from '../Views/Admin/Form10/Form10';
import Form10Report from '../Views/Admin/Form10/Form10Report';
import Form11 from '../Views/Admin/Form11/Form11';
import Form11Report from '../Views/Admin/Form11/Form11Report';
import Form15 from '../Views/Admin/Form15/Form15';
import Form15Report from '../Views/Admin/Form15/Form15Report';
import Form16 from '../Views/Admin/Form16/Form16';
import Form16Report from '../Views/Admin/Form16/Form16Report';
import Form19 from '../Views/Admin/Form19/Form19';
import Form19Report from '../Views/Admin/Form19/Form19Report';
import Form21 from '../Views/Admin/Form21/Form21';
import Form21Report from '../Views/Admin/Form21/Form21Report';
import Form30 from '../Views/Admin/Form30/Form30';
import Form30Report from '../Views/Admin/Form30/Form30Report';

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
                    <Route path='form3' element={<Form3 />} />
                    <Route path='form3report' element={<Form3Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form3'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form3report'
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
                    <Route path='form5' element={<Form5 />} />
                    <Route path='form5report' element={<Form5Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form5'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form5report'
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
                    <Route path='form7' element={<Form7 />} />
                    <Route path='form7report' element={<Form7Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form7'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form7report'
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
                    <Route path='form10' element={<Form10 />} />
                    <Route path='form10report' element={<Form10Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form10'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form10report'
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
                    <Route path='form11' element={<Form11 />} />
                    <Route path='form11report' element={<Form11Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form11'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form11report'
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
                    <Route path='form15' element={<Form15 />} />
                    <Route path='form15report' element={<Form15Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form15'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form15report'
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
                    <Route path='form16' element={<Form16 />} />
                    <Route path='form16report' element={<Form16Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form16'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form16report'
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
                    <Route path='form19' element={<Form19 />} />
                    <Route path='form19report' element={<Form19Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form19'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form19report'
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
                    <Route path='form21' element={<Form21 />} />
                    <Route path='form21report' element={<Form21Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form21'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form21report'
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
                    <Route path='form30' element={<Form30 />} />
                    <Route path='form30report' element={<Form30Report />} />
                  </>
                ) : (
                  <>
                    <Route
                      path='form30'
                      element={
                        <NoAuthorization
                          errorTitle={`माफ गर्नुहोला!`}
                          errorMsg={`तपाईसंग अनुमति छैन`}
                        />
                      }
                    />
                    <Route
                      path='form30report'
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
