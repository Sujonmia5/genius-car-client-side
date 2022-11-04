import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cart = ({ service }) => {
    // console.log(service);
    const { title, img, price, _id } = service;
    return (
        <div className="card mx-auto card-compact align-middle w-3/4  bg-base-200 p-6 rounded-xl shadow-xl">
            <figure>
                <img src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className='text-[#FF3811] text-start font-semibold text-xl'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}> <button className="text-[#FF3811] hover:bg-slate-300 p-3 rounded-full "><FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;