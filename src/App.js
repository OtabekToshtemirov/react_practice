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





export default App;