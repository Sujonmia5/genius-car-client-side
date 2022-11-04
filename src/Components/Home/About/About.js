import React from 'react';
import Person from '../../../Assets/images/about_us/person.jpg'
import Parts from '../../../Assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero-content hero flex-col w-full lg:flex-row mt-14 p-4">
            <div className='lg:w-1/2 relative mb-5 md:mb-0'>
                <img src={Person} className="md:h-[450px] md:w-3/4 rounded-lg shadow-2xl" alt='' />
                <img src={Parts} className=" absolute right-0 md:right-10 -bottom-5 md:-bottom-14 h-40 md:w-72 md:h-72 rounded-lg shadow-2xl" alt='' />
            </div>
            <div className='lg:w-1/2 text-justify mx-5 sm:ml-20 pt-3'>
                <p className='text-orange-600 font-bold text-xl mb-5 mt-2'>About Us</p>
                <h1 className="text-5xl font-bold mb-2"> We are qualified  <br />& of experience <br /> in this field</h1>
                <p className="py-6 md:w-3/4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p className="pb-6 md:w-3/4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                <div className='flex justify-center md:justify-start '>
                    <button className="btn rounded-md border-none hover:bg-[#ff3911b1] text-white font-semibold bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div >
    );
};

export default About;