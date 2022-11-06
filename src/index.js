import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'; 
import JsonApp from './jsonLesson/JsonApp';
import ChartsComp from './Chartlist/Chartscomp';
import Usestate from './Usestate/usestate';






ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Usestate/>
      {/* <ChartsComp/> */}
        {/* <JsonApp/> */}
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
  


