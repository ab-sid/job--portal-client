import React from 'react';
import Company from '../../Company/Company';
import Experience from '../../Experience/Experience';
import Fresher from '../../Fresher/Fresher';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Fresher></Fresher>
            <Experience></Experience>
            <Company></Company>
        </div>
    );
};

export default Home;