import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  // const [api, setapi] = useState('http://localhost:1337');
  const [api, setapi] = useState('https://khadyaproject.herokuapp.com');
  const [form1, setform1] = useState([]);
  const [form3, setform3] = useState([]);
  const [form5, setform5] = useState([]);
  const [currentUser, setcurrentUser] = useState(null);

  useEffect(() => {
    const getLocal = () => {
      if (localStorage.getItem('currentUser') === null) {
        localStorage.setItem('currentUser', JSON.stringify([]));
      } else {
        let localDb = JSON.parse(localStorage.getItem('currentUser'));
        setcurrentUser(localDb);
      }
    };
    getLocal();
  }, []);

  useEffect(() => {
    const saveLocal = () => {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    };
    saveLocal();
  }, [currentUser]);

  const fetchform1 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form1s?sort[0]=createdAt%3Adesc&populate[0]=collection&populate[1]=collection.months`
      );
      setform1(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform3 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form3s?sort[0]=createdAt%3Adesc&populate[0]=form3collection&populate[1]=form3collection.form3months`
      );
      setform3(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform5 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form5s?sort[0]=createdAt%3Adesc&populate[0]=form5collection&populate[1]=form5collection.form5months`
      );
      setform5(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchform1();
    fetchform3();
    fetchform5();
  }, []);

  return (
    <DataContext.Provider
      value={{
        apiData: [api, setapi],
        form1Data: [form1, setform1],
        fetchform1Function: { fetchform1 },
        form3Data: [form3, setform3],
        fetchform3Function: { fetchform3 },
        form5Data: [form5, setform5],
        fetchform5Function: { fetchform5 },
        currentUserData: [currentUser, setcurrentUser],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
