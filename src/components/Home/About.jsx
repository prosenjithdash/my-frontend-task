import React from 'react';

const About = () => {
    return (
        <div className="px-4 py-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

                {/* Left side */}
                <div className="space-y-4 max-w-xl">
                    <p className="text-3xl md:text-4xl text-black border border-gray-400 rounded-full w-fit p-5">
                        F
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                        We design every project with long- <br />term success in mind.
                    </p>
                </div>

                {/* Right side */}
                <div className="max-w-2xl">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                        Our approach is straightforward— prioritizing
                        functionality, speed, and
                        clarity for solutions.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;