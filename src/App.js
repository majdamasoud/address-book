import './App.css';
import Addresses from './Components/addresses/Addresses';
import Display from './Components/display/Display';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([])

  function getRandomUsers() {
    return axios.get('https://randomuser.me/api/?results=100')
      .then(({ data }) => {
        return data.results;
      })
      .catch(err => {
        console.log(err);
        return [];
      })
  }
  
  useEffect(() => {
    const getUsers = async () => {
      const randomUsers = await getRandomUsers();
      setUsers(randomUsers)
    }
    getUsers()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Addresses users={users}/>} />
        <Route path='/display/:index' element={<Display users={users}/>} />
      </Routes>
    </div>
  );
}

export default App;
