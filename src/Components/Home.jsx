import React from 'react';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import Feature from './Feature';
import Team from './Team';
import Testimonial from './Testimonial';
import FaqSection from './FaqSection';

const Home = () => {
    return (
        <div className='px-5'>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <Feature></Feature>
            <Team></Team>
            <Testimonial></Testimonial>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;