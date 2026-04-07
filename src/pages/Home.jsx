import React from 'react';
import About from '../components/Home/About';
import Portfolio from '../components/Home/Portfolio';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-4'>
            <About />
            <Portfolio/>
        </div>
    );

};

export default Home;