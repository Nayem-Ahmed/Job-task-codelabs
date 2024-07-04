import React from 'react';
import bb1 from '../assets/Rectangle 27-1.png'
import bb2 from '../assets/Rectangle 27.png'

const Team = () => {
    return (
        <div className='flex gap-5 my-16 flex-col md:flex-row'>
            <div className='md:w-6/12 relative'>
                <img className='rounded-3xl' src={bb1} alt="" />
                <div className='bg-[#343268] rounded-2xl p-4 absolute bottom-6 w-80 text-white left-20'>
                    <h1>Our mission is simple</h1>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>

                </div>
            </div>
            
            <div className='md:w-6/12 relative'>
                <img className='rounded-3xl' src={bb2} alt="" />
                <div className='bg-[#343268] rounded-2xl p-4 absolute bottom-6 w-80 text-white left-20'>
                    <h1>Our mission is simple</h1>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>

                </div>
            </div>
            
        </div>
    );
};

export default Team;