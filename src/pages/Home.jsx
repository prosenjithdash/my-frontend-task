import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';
import GetInTouch from './GetInTouch';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-4'>
            <About />
            <Portfolio />
            <GetInTouch/>
            <Blog />
        </div>
    );

};

export default Home;