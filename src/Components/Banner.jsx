import React from 'react';
import banner from '../assets/Rectangle 5.png'
import chart from '../assets/chart.png'
import book from '../assets/book.png'
import camera from '../assets/camera.png'
import person from '../assets/per.jpg'
import { FaStar } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='my-10'>
            <img className='w-full mb-5' src={banner} alt="" />
            <div className='flex gap-5 my-5 flex-col md:flex-row'>
                <div className='md:w-1/5 border rounded-lg p-4'>
                    <h1 className='font-bold text-2xl'>90%</h1>
                    <p>Patient satisfaction rate, reflecting our commitment.</p>
                    <img className='w-24 ' src={chart} alt="" />
                </div>
                <div className='md:w-10/12 '>
                    <h1 className='text-3xl font-bold text-center'>Comprehensive Care for Every Patient</h1>
                    <div className='flex gap-5 mt-7'>
                        <div className='border rounded-lg p-4 w-2/4'>
                            <h1 className='font-bold text-2xl'>500%</h1>
                            <p>Board-certified doctors</p>
                            <div className='flex justify-end'>
                                <img src={book} alt="Book" />
                            </div>
                        </div>
                        <div className='border rounded-lg p-4'>
                            <h1 className='font-bold text-2xl flex gap-2 items-center '>4.48 <span className='text-[#FFE03D]'><FaStar></FaStar></span></h1>
                            <p>Over 20,000 Patient</p>
                            <div className='flex justify-center mt-1'>
                                <img className='rounded-full w-10' src={person} alt="" />
                                <img className='rounded-full w-10' src={person} alt="" />
                                <img className='rounded-full w-10' src={person} alt="" />
                            </div>

                        </div>
                        <div className='border rounded-lg p-4 md:w-2/4'>
                            <h1 className='font-bold text-2xl'>$5000</h1>
                            <p>Money spend for poor patient</p>
                            <div className='flex justify-end'>
                                <img src={book} alt="Book" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/5 border rounded-lg p-4'>
                    <h1 className='font-bold text-2xl'>50%</h1>
                    <p>Free lession video
                        for patient</p>
                    <img src={camera} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;