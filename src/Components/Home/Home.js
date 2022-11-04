import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Context';
import About from './About/About';
import Address from './Address/Address';
import Banner from './Banner/Banner'
import Service from './Service/Service';

const Home = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);
    return (
        <div className='mt-20'>
            <Banner />
            <About />
            <Service />
            <Address />
        </div>
    );
};

export default Home;