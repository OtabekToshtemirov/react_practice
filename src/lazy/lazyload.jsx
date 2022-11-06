import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from './../nur.jpg';
import 'react-lazy-load-image-component/src/effects/blur.css';



const Myimage = () => {


    const styleImage={
        width:'75%'
    }
    return ( 
        <div>
            <h1>Lazy load image tutorial</h1>
            <LazyLoadImage
                src={image}
                style={styleImage}
                effect="blur"
                delayTime="15000"
                placeholderSrc={<h1>Loading...</h1>}
            />
            <span>Bu yerda rasm bor</span> 
        </div>
     );
}
 
export default Myimage;