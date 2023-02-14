import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const style = {
        width:900,
    }
    return (
        <div>
            <h1>홈</h1>
            <img src='https://www.douzone.com/html/images/img_erp_mockup@2x.png' style={style}/>     
        </div>
    );
};

export default Home;