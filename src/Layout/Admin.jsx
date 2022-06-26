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
import axios from 'axios';
import UserList from '../Views/Admin/Settings/UserList';

const Admin = () => {
  const { apiData } = useContext(DataContext);
  const [api, setapi] = apiData;
  const [showNav, setshowNav] = useState(false);
  // const [userwithRoles, setuserwithRoles] = useState([]);
  // const { currentUserData } = useContext(DataContext);
  // const [currentUser, setcurrentUser] = currentUserData;
  // const { userwithRolesData } = useContext(DataContext);
  // const [userwithRoles, setuserwithRoles] = userwithRolesData;

  const [currentUser, setcurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  );

  // const fetchuserswithRoles = async () => {
  //   try {
  //     const jwt = await currentUser.jwt;
  //     console.log('jwt', jwt);
  //     const response = await axios.get(
  //       `${api}/api/users?populate[0]=rolescollection`
  //     );
  //     console.log('Response', response.data[0].id);
  //     const singleUser = response.data.find((item) => {
  //       return item.username === currentUser.user.username;
  //     });
  //     setuserwithRoles(Object.values(singleUser.rolescollection));
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchuserswithRoles();
  // }, []);

  useEffect(() => {
    console.log('currentUser', currentUser.user.username);
  }, [currentUser]);

  return (
    <>
      <Sidebar showNav={showNav} setshowNav={setshowNav} />

      <Navbar showNav={showNav} setshowNav={setshowNav} />

      <div className='bg-gray-100 lg:ml-[20%] w-[100%] lg:w-[80%] min-h-screen p-6'>
        <div className='mt-14'>
          {Object.keys(currentUser).length > 0 ? (
            <>
              <Routes>
                <Route path='dashboard' element={<Dashboard />} />
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'FFSQRD' ||
                currentUser.user.username === 'FTQCO' ||
                currentUser.user.username === 'FTQCDO' ? (
                  <>
                    {console.log('admintrue')}
                    <Route path='form1' element={<Form1 />} />
                    <Route path='form1report' element={<Form1Report />} />
                  </>
                ) : (
                  <>
                    {console.log('adminfalse')}

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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'FFSQRD' ||
                currentUser.user.username === 'FTQCO' ||
                currentUser.user.username === 'FTQCDO' ? (
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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'FFSQRD' ||
                currentUser.user.username === 'FTQCO' ? (
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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'NFFRL' ||
                currentUser.user.username === 'FTQCO' ? (
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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'NFFRL' ||
                currentUser.user.username === 'FTQCO' ? (
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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'FIEQCO' ? (
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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'FFSQRD' ||
                currentUser.user.username === 'FTQCO' ||
                currentUser.user.username === 'FTQCDO' ? (
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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'FFSQRD' ||
                currentUser.user.username === 'FTQCO' ? (
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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'FFSQRD' ||
                currentUser.user.username === 'FTQCO' ||
                currentUser.user.username === 'FTQCDO' ? (
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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'FTDND' ||
                currentUser.user.username === 'FTQCO' ||
                currentUser.user.username === 'FTQCDO' ? (
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
                {currentUser.user.username === 'Admin' ||
                currentUser.user.username === 'FTQCO' ||
                currentUser.user.username === 'FIEQCO' ||
                currentUser.user.username === 'FTQCDO' ? (
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
                <Route path='userlist' element={<UserList />} />
              </Routes>
            </>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
