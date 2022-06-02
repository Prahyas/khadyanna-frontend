import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();
4;

export const DataProvider = (props) => {
  // const [api, setapi] = useState('http://localhost:1337');
  const [api, setapi] = useState('https://khadyaproject.herokuapp.com');
  const [form1, setform1] = useState([]);
  const [currentUser, setcurrentUser] = useState(null);

  const [foods, setFoods] = useState([
    {
      attributes: {
        year: '123',
        karyalaya: 'qwe',
        aawo: 'qwe',
        data: [
          {
            khadyanna: 'Dudh',
            months: {
              baisakh: '1',
              jestha: '2',
              ashar: '3',
            },
          },
          {
            khadyanna: 'Tel',
            months: {
              baisakh: '4',
              jestha: '5',
              ashar: '6',
            },
          },
        ],
      },
    },
  ]);

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
        `${api}/api/form1s?populate[0]=collection&populate[1]=collection.months`
      );
      setform1(response.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchform1();
  }, []);

  return (
    <DataContext.Provider
      value={{
        apiData: [api, setapi],
        form1Data: [form1, setform1],
        fetchform1Function: { fetchform1 },
        foodsData: [foods, setFoods],
        currentUserData: [currentUser, setcurrentUser],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
