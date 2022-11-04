import React, { useContext, useState } from 'react';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/Context';

const CheckOut = () => {
    const checkOutService = useLoaderData()
    const { user } = useContext(AuthContext)
    const { _id, price, title } = checkOutService;
    const [userData, setUserData] = useState({})
    const Navigate = useNavigate()

    const checkOutData = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...userData, email: user.email }
        data[field] = value
        setUserData(data)
    }

    const checkOutHandleButton = (e) => {
        e.preventDefault()
        const from = e.target;
        const orders = {
            services_id: _id,
            Name: title,
            price,
            // customer_info: userData,
            customerName: userData.first_name + userData.last_name,
            phone: userData.number,
            email: userData.email,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire('Orders successful', '', 'success')
                    from.reset()
                    // Navigate('/orders')
                }
                // console.log(data)
            })

        // console.log(orders);
    }
    return (
        <div>
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-3xl font-bold"><span className='underline'>Services Name:</span> {title}</h1>
                    <p className="text-1xl font-bold text-red-600 mt-5">Price: ${price}</p>
                </div>
            </div>
            <form onSubmit={checkOutHandleButton} className='mt-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-3 px-5 md:px-28'>
                    <div className="form-control">
                        <input onChange={checkOutData} type="text" name='first_name' placeholder="Enter your First Name" className="input input-bordered rounded-xl" required />
                    </div>
                    <div className="form-control ">
                        <input onChange={checkOutData} type="text" name='last_name' placeholder="Enter your Last Name" className="input input-bordered rounded-xl" required />
                    </div>
                    <div className="form-control ">
                        <input onChange={checkOutData} type="text" name='number' placeholder="Enter your phone number" className="input input-bordered rounded-xl" required />
                    </div>
                    <div className="form-control ">
                        <input onChange={checkOutData} type="email" name='email' defaultValue={user?.email} placeholder="Enter your email" className="input input-bordered rounded-xl" required readOnly />
                    </div>
                </div>
                <div className='px-10 mt-10 text-center'>
                    <textarea onChange={checkOutData} className="textarea rounded-xl input-bordered w-full" placeholder="Your message"></textarea>
                    <button type='submit' className="btn btn-active btn-secondary mt-4 mb-10 font-bold">Check Out</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;