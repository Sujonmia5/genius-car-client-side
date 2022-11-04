import React, { useEffect, useState } from 'react';
import Cart from './ServiceCart/Cart';

const Service = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                // console.log(data);
            })
    }, [])

    return (
        <div className='text-center mt-20 mb-20'>
            <p className='text-orange-600 font-bold text-xl mb-5 mt-2'>Service</p>
            <h1 className='font-bold text-5xl mb-5 mt-2'>Our Service Area</h1>
            <p className='text-[#737373] md:w-3/6 mx-auto '>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='mt-12 content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6'>
                {
                    services.map(service => <Cart key={service._id} service={service}></Cart>)
                }
            </div>
            <div className='mt-10'>
                <button className='btn btn-outline text-[#FF3811] rounded-lg border-[#FF3811] hover:bg-[#FF3811]'>More Services</button>
            </div>
        </div>
    );
};

export default Service;