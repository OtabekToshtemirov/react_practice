import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
=======
import {BrowserRouter} from 'react-router-dom'; 
import JsonApp from './jsonLesson/JsonApp';
import ChartsComp from './Chartlist/Chartscomp';
import Usestate from './Usestate/usestate';
>>>>>>> 2f64b9fce2b7a16387fdcc6b2e2dfb8bd4a39ddb






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
  

ReactDOM.render(
    <App/>,
    document.getElementById("root")
  );
   

<<<<<<< HEAD

=======
>>>>>>> 2f64b9fce2b7a16387fdcc6b2e2dfb8bd4a39ddb
