<<<<<<< HEAD
import { url } from 'inspector';
import React, { useState } from 'react';
import Joke from './skeleton/Joke';

const App = () => {
const [joke,setjoke] = useState({});
const [loading,setLoading] = useState(false);

const getNewJoke=()=>{
  setLoading(true);
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json()
  .the(data=>{
    const {icon_url,value} = data;
    setjoke({icon_url,value});
    console.log(data);
  }))
}


  return ( 
    <div>
        <Joke joke={joke} loading={loading} getNewJoke={getNewJoke}/>
    </div>
   );
}
 
=======
import * as React from 'react';
import { Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import {Home} from './pages/Home';
import {About} from './pages/About';
import ChartsComp from './Chartlist/Chartscomp';



const App = () => {
  return (
    <>
    <ChartsComp/></>
    // <Routes>
    //   <Route element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="home" element={<Home />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="*" element={<p>There's nothing here: 404!</p>} />
    //   </Route>
    // </Routes>
  );
};





>>>>>>> 2f64b9fce2b7a16387fdcc6b2e2dfb8bd4a39ddb
export default App;