import React from 'react';
import per2 from '../assets/per2.jpg'
import per22 from '../assets/per.jpg'
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className='my-10'>
            <div>
                <button type="button" className='border mb-5 border-black py-2 px-4 rounded-3xl font-semibold'>Testimonial</button>
                <h1 className='text-2xl font-bold'>What they say about us</h1>
            </div>

            <div className='flex gap-5'>
                <div className='w-1/3 my-6 bg-[#FFFFF5] p-4'>
                    <h1 className='font-bold mb-3'>Expertise and Compassion Combined</h1>
                    <p className='text-gray-500 mb-5'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className=''>
                        <img className='rounded-full h-12 w-12 object-fill float-left mr-4' src={per2} alt="" />
                        <h2 className='font-semibold inline'>Sarah D,</h2><span>IT Professional</span>
                        <div className='flex gap-1'>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                        </div>

                    </div>
                </div>
                <div className='w-1/3 my-6 bg-[#FFFFF5] p-4'>
                    <h1 className='font-bold mb-3'>Expertise and Compassion Combined</h1>
                    <p className='text-gray-500 mb-5'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className=''>
                        <img className='rounded-full h-12 w-12 object-fill float-left mr-4' src={per22} alt="" />
                        <h2 className='font-semibold inline'>Sarah D,</h2><span>IT Professional</span>
                        <div className='flex gap-1'>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                        </div>

                    </div>
                </div>
                <div className='w-1/3 my-6 bg-[#FFFFF5] p-4'>
                    <h1 className='font-bold mb-3'>Expertise and Compassion Combined</h1>
                    <p className='text-gray-500 mb-5'>I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                    <div className=''>
                        <img className='rounded-full h-12 w-12 object-fill float-left mr-4' src={per2} alt="" />
                        <h2 className='font-semibold inline'>Sarah D,</h2><span>IT Professional</span>
                        <div className='flex gap-1'>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                            <span className='text-[#FFE03D] block'><FaStar></FaStar></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;