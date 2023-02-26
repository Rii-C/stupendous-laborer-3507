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
const Carousal = () => {
    return (
        <div>
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings} background={"black"}>
            <img style={{width:"100%"}} src="https://img7.hkrtcdn.com/24472/bnr_2447166_o.jpg" alt="" />
             <img style={{width:"100%"}} src="https://img5.hkrtcdn.com/24458/bnr_2445754_o.jpg" alt="" />  
             <img style={{width:"100%"}} src="https://img1.hkrtcdn.com/24458/bnr_2445780_o.jpg" alt="" />  
             <img style={{width:"100%"}} src="https://img5.hkrtcdn.com/24429/bnr_2442834_o.jpg" alt="" />  
             <img style={{width:"100%"}} src="https://img3.hkrtcdn.com/24441/bnr_2444072_o.jpg" alt="" />  
            </Slide>
        </div>
       
    );
};

export default Carousal;