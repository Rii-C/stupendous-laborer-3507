import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
const Carousal2 = () => {
    return (
        <div style={{width:"80%", height:"400px", margin: "auto", justifyContent:'center', alignItems:'center'}} >
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings} >
            <img style={{width:"100%",borderRadius:'8px'}} src="https://img9.hkrtcdn.com/24444/bnr_2444308_o.jpg" alt="" />
             <img style={{width:"100%",borderRadius:'8px'}} src="https://img1.hkrtcdn.com/24444/bnr_2444300_o.jpg" alt="" />   
            </Slide>

        </div>
       
    );
};

export default Carousal2;