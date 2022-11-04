import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.svg'
import { AuthContext } from '../../Context/Context';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const Navigate = useNavigate()
    // console.log(user);
    const signOut = () => {
        logOut()
            .then(() => Navigate('/login'))
            .catch(() => { })
    }
    const menu = <>
        <li><Link className='font-semibold text-[18px]' to='/home'>Home</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link className='font-semibold text-[18px]' to='/orders'>Orders</Link></li>
                    <li><Link className='font-semibold text-[18px]' onClick={signOut}>Log Out</Link></li>
                </> : <>
                    <li><Link className='font-semibold text-[18px]' to='/login'>Login</Link></li>
                    <li><Link className='font-semibold text-[18px]' to='/register'>Register</Link></li>
                </>
        }

        {/* <li><Link className='font-semibold text-[18px]' to='/about'>About</Link></li>
        <li><Link className='font-semibold text-[18px]' to='services'>Services</Link></li>
        <li><Link className='font-semibold text-[18px]' to='blog'>Blog</Link></li>
        <li><Link className='font-semibold text-[18px]' to='contact'>Contact</Link></li> */}
    </>
    return (
        <div className="navbar mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-24' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline btn-secondary">Get started</Link>
            </div>
        </div>
    );
};

export default Header;