import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import bbb from '../assets/Rectangle 24.png'

const BannerBottom = () => {
    return (
        <div className='flex gap-5 my-6 flex-col md:flex-row'>
            <div className='md:w-6/12'>
            <button type="button" className='border mb-2 border-black py-2 px-4 rounded-3xl font-semibold'>Who we are</button>
            <h1 className='text-2xl font-bold mb-3'>We Help To Get Soultions</h1>
            <p className='mb-4 text-gray-500'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
            </p>
            <button type="button" className='border py-2 px-4 rounded-xl font-semibold bg-[#FFE03D]'>Learn more <GoArrowUpRight className='inline font-semibold'></GoArrowUpRight></button>


            </div>
            <div className='md:w-6/12 relative'>
                <img className='' src={bbb} alt="" />
                <div className='bg-[#343268] rounded-2xl p-4 absolute -bottom-10 w-80 text-white -left-20'>
                    <h1>Our mission is simple</h1>
                    <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>

                </div>
            </div>
        </div>
    );
};

export default BannerBottom;