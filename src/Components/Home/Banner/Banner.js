import React from 'react';
import img1 from '../../../Assets/images/banner/1.jpg'
import img2 from '../../../Assets/images/banner/2.jpg'
import img3 from '../../../Assets/images/banner/3.jpg'
import img4 from '../../../Assets/images/banner/4.jpg'
import img5 from '../../../Assets/images/banner/5.jpg'
import img6 from '../../../Assets/images/banner/6.jpg'
import BannerSlider from './BannerSlider';

const Banner = () => {

    const bannerData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 6
        },
        {
            image: img6,
            prev: 5,
            id: 6,
            next: 1
        }
    ]


    return (
        <div className="carousel w-full">
            {
                bannerData.map(slider => <BannerSlider key={slider.id} slider={slider} />)
            }
        </div>
    );
};

export default Banner;