import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  // const [api, setapi] = useState('http://localhost:1337');
  const [api, setapi] = useState('https://khadyaproject.herokuapp.com');
  const [form1, setform1] = useState([]);
  const [form3, setform3] = useState([]);
  const [form5, setform5] = useState([]);
  const [form7, setform7] = useState([]);
  const [form10, setform10] = useState([]);
  const [form11, setform11] = useState([]);
  const [form15, setform15] = useState([]);
  const [form16, setform16] = useState([]);
  const [form19, setform19] = useState([]);
  const [form21, setform21] = useState([]);
  const [form30, setform30] = useState([]);
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
  const fetchform7 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form7s?sort[0]=createdAt%3Adesc&populate[0]=form7collection&populate[1]=form7collection.form7months`
      );
      setform7(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform10 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form10s?sort[0]=createdAt%3Adesc&populate[0]=form10collection&populate[1]=form10collection.form10months`
      );
      setform10(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform11 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form11s?sort[0]=createdAt%3Adesc&populate[0]=form11collection&populate[1]=form11collection.form11months`
      );
      setform11(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform15 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form15s?sort[0]=createdAt%3Adesc&populate[0]=form15collection&populate[1]=form15collection.form15months`
      );
      setform15(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform16 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form16s?sort[0]=createdAt%3Adesc&populate[0]=form16collection&populate[1]=form16collection.form16months`
      );
      setform16(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform19 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form19s?sort[0]=createdAt%3Adesc&populate[0]=form19collection&populate[1]=form19collection.form19months`
      );
      setform19(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform21 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form21s?sort[0]=createdAt%3Adesc&populate[0]=form21collection&populate[1]=form21collection.form21months`
      );
      setform21(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  const fetchform30 = async () => {
    try {
      const response = await axios.get(
        `${api}/api/form30s?sort[0]=createdAt%3Adesc&populate[0]=form30collection&populate[1]=form30collection.form30months`
      );
      setform30(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchform1();
    fetchform3();
    fetchform5();
    fetchform7();
    fetchform10();
    fetchform11();
    fetchform15();
    fetchform16();
    fetchform19();
    fetchform21();
    fetchform30();
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
        form7Data: [form7, setform7],
        fetchform7Function: { fetchform7 },
        form10Data: [form10, setform10],
        fetchform10Function: { fetchform10 },
        form11Data: [form11, setform11],
        fetchform11Function: { fetchform11 },
        form15Data: [form15, setform15],
        fetchform15Function: { fetchform15 },
        form16Data: [form16, setform16],
        fetchform16Function: { fetchform16 },
        form19Data: [form19, setform19],
        fetchform19Function: { fetchform19 },
        form21Data: [form21, setform21],
        fetchform21Function: { fetchform21 },
        form30Data: [form30, setform30],
        fetchform30Function: { fetchform30 },
        currentUserData: [currentUser, setcurrentUser],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
