import React, { useContext, useState } from 'react';
import loginImg from '../../Assets/images/login/login.svg'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(AuthContext)
    const Navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const loginHandle = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        login(email, password)
            .then(result => {
                // console.log(result.user);
                Swal.fire('LogIn Successful', '', 'success')
                Navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero w-full h-full my-10">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginHandle} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login Now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center text-lg'>Or Sign In with</p>
                    <div className=' flex items-center justify-center mt-5'>
                        <button className='mr-10 rounded-full border px-3 bg-gray-200' >
                            <FaFacebookF className='h-10 text-blue-900'></FaFacebookF>
                        </button>
                        <button className='rounded-full border px-3 bg-gray-200'>
                            <FcGoogle className='h-10'></FcGoogle>
                        </button>
                    </div>
                    <p className='text-center mb-12 mt-3 text-lg'>Don't Have an account? <Link to='../register' className='text-red-600 font-semibold'>Register Now</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;