import React, { useContext, useEffect, useState } from 'react';
import login from '../../Assets/images/login/login.svg'
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import Swal from 'sweetalert2';

const Register = () => {
    const [userInfo, setUserInfo] = useState({})
    const [userData, setUserData] = useState({})
    const [error, setError] = useState('')
    const { createUser, userUpdate, user } = useContext(AuthContext)

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...userData }
        data[field] = value
        setUserData(data)
        // console.log(userData);
    }
    useEffect(() => {
        setUserInfo(userData);
    }, [userData])

    const loginHandle = (e) => {
        e.preventDefault()
        const form = e.target;
        const confirmPassword = form.confirmPassword.value;
        if (!/(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/.test(userInfo.password)) {
            setError('Please enter validate password');
            return;
        }
        else
            if (userInfo.password !== confirmPassword) {
                setError("Don't match your password");
                return;
            }
        setError('')
        createUser(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                Swal.fire('Account create Successful', 'Please Check your email', 'success')
                // console.log(userInfo.Name, userInfo.phoneNumber);
                userUpdate(userInfo.Name, userInfo.phoneNumber)
                    .then(() => {
                        console.log('user update', user);
                    })
                    .catch(error => console.log(error))
                form.reset()
                // console.log(user);

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero w-full h-full">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginHandle} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Register Now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name='Name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name='phoneNumber' placeholder="Enter your number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleOnChange} type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handleOnChange} type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                            {
                                error ? <p>{error}</p> : <></>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm  Password</span>
                            </label>
                            <input onChange={handleOnChange} type="password" name='confirmPassword' placeholder="Enter your confirm password" className="input input-bordered" required />
                            {
                                error ? <p>{error}</p> : <></>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register Now</button>
                        </div>
                    </form>
                    <p className='text-center'>Or Register In with</p>
                    <div className=' flex items-center justify-center mt-5'>
                        <button className='mr-10 rounded-full border px-3 bg-gray-200' >
                            <FaFacebookF className='h-10 text-blue-900'></FaFacebookF>
                        </button>
                        <button className='rounded-full border px-3 bg-gray-200'>
                            <FcGoogle className='h-10'></FcGoogle>
                        </button>
                    </div>
                    <p className='text-center mb-12'>Already Have an account? <Link to='../login' className='text-red-600'>Login Now</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;