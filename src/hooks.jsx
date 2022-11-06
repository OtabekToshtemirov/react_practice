import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Hooks = () => {


    const [count,setCount] = useState(0);
    const [infosType,setInfosType] = useState('posts');

    // useEffect(()=>{
    //     document.title=`Siz ${count} marta bosdingiz.`;
    //     console.log(count);
    // },[])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${infosType}`).then(response=>response.json())
        .then(json=>console.log(json))
    },[])
    return (
        <div>
            {/* <p>Siz {count} marta bosdingiz.</p>
            <button onClick={()=>setCount(count+1)}>Bosing</button> */}
            <p>{infosType} {fetch}</p>
            <button onClick={()=>setInfosType('users')}>Users</button>
            <button onClick={()=>setInfosType('comments')}>Comments</button>
            <button onClick={()=>setInfosType('todos')}>Todos</button>
        </div>
      );
}
 
export default Hooks;