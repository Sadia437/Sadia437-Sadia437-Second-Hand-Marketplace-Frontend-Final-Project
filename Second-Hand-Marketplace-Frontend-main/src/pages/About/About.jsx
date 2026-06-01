import React from 'react';
import Reviews from '../Home/Reviews/Reviews';
import Experts from './Experts/Experts';
import team from '../../assets/images/company team photo.jpg';

const About = () => {
    return (
        <div className='mt-10'>
            <img src={team} alt="Company Team" className="w-80% h-auto" />
            <Experts></Experts>
            <Reviews></Reviews>
        </div>
    );
};

export default About;
