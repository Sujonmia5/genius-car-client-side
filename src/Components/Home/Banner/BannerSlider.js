import React from 'react';
import './Banner.css'

const BannerSlider = ({ slider }) => {
    // console.log(slider);
    const { image, prev, id, next } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item md:h-[600px] relative w-full">
            <div className='img-gradient'>
                <img src={image} alt='' className="md:w-[1280px] md:h-[600px]" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn border-none text-black font-bold text-xl btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811] mr-5">❮</a>
                <a href={`#slide${next}`} className="btn border-none text-black font-bold text-xl btn-circle bg-[rgba(255,255,255,0.20)] hover:bg-[#FF3811]">❯</a>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/3">
                <h1 className='text-5xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex justify-start left-24 top-1/2 text-white w-1/2">
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start left-24 top-2/3 w-1/2">
                <button className="btn bg-[#FF3811] text-white border-none mr-5">Discover More</button>
                <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
        </div>
    );
};

export default BannerSlider;