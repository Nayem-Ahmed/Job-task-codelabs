import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import meru from '../assets/Rectangle 27-2.png'

const Feature = () => {
    return (
        <div className='flex gap-5 my-24'>
            <div className='w-6/12'>
                <button type="button" className='border mb-2 border-black py-2 px-4 rounded-3xl font-semibold'>Service</button>
                <h1 className='text-2xl font-bold mb-3'>Empowering Health,<br></br> Enriching Lives</h1>
                <p className='mb-4 text-gray-500'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>
                <button type="button" className='border py-2 px-4 rounded-xl font-semibold bg-[#FFE03D]'>Appointment <GoArrowUpRight className='inline font-semibold'></GoArrowUpRight></button>


            </div>
            <div className='w-6/12 relative'>
                <img className='rounded-3xl' src={meru} alt="" />
                <div className='bg-[#020043] rounded-2xl p-4 absolute bottom-8 w-80 text-white left-10'>
                    <h1>Our mission is simple</h1>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>

                </div>
            </div>
        </div>
    );
};

export default Feature;