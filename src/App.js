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
 
export default App;