import React from 'react';
import Users from './users.json';
import './json.css'
import { Row ,Col} from 'react-bootstrap';

const JsonApp = () => {
    return ( 
        <div>
            <Col md="4">
            {Users.map((post)=>{
                return(
                    <div className="infos container">
                        <h1>Ism : {post.name}</h1>
                        <h3>Country : {post.Country}</h3>
                        <h4>Yoshi {post.age}</h4>
                        <p>Call phone : {post.phone}</p>
                    </div>
                )
            })}</Col>
        </div>
     );
}
 
export default JsonApp;