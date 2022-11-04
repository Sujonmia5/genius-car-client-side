import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";

const Address = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-around rounded bg-gray-900 text-white lg:py-14 py-4 mb-10 shadow w-full">
            <div className="flex justify-center border-b-2 lg:border-b-0 pb-3 lg:border-r-2 lg:pr-3 items-center">
                <div className="relative">
                    <FaCalendarAlt className='h-20 w-10' />
                    <FaClock className='text-red-600 absolute right-0 bottom-4'></FaClock>
                </div>
                <div className='ml-5'>
                    <div className="text-xl font-medium">We are open monday-friday</div>
                    <div className="text-3xl font-bold text-primary">7:00 am - 9:00 pm</div>
                </div>
            </div>
            <div className="flex justify-center my-3 items-center">
                <div className="text-secondary mr-3 relative">
                    <FaPhoneAlt className='text-5xl text-white'></FaPhoneAlt>
                    <RiMessage2Fill className='absolute top-0 right-0 text-xl text-red-600'></RiMessage2Fill>
                </div>
                <div>
                    <div className="stat-title">Have a question?</div>
                    <div className="text-3xl font-bold text-secondary">+2546 251 2658</div>
                </div>

            </div>
            <div className="flex justify-center pt-3 lg:border-t-0 border-t-2 lg:border-l-2 lg:pl-3 items-center">
                <div className="mr-3">
                    <FaMapMarkerAlt className='text-5xl text-red-600'></FaMapMarkerAlt>
                </div>
                <div>
                    <div className="stat-title">Need a repair? our address</div>
                    <div className="text-3xl font-bold text-secondary">Liza Street, New York</div>
                </div>
            </div>
        </div>
    );
};

export default Address;