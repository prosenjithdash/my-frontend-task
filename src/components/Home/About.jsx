import React from 'react';

const About = () => {
    return (
        <div className="px-4 py-10">

            {/* Logo and Des part */}
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

            {/* More about part */}

            <div className="bg-[#f3f3f3] py-10 px-4">

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left part */}
                    <div className="bg-white rounded-3xl p-6 flex flex-col justify-between shadow-sm">
                        <div>
                            <h1 className="text-5xl font-bold text-black">
                                25<span className="text-gray-300">+</span>
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">Years of experience</p>

                            <hr className="my-5 border-gray-200" />

                            <p className="text-gray-600 text-sm leading-relaxed">
                                Explore how we transform ideas into extraordinary digital experiences.
                            </p>
                        </div>

                        <div className="mt-6 flex items-center gap-3">
                            {/* Avatars */}
                            <div className="flex -space-x-2">
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=1" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=2" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=3" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=4" />
                            </div>
                            <p className="text-sm text-gray-600">1200+ happy users review</p>
                        </div>

                    </div>

                    {/* Center part */}
                    <div className="relative rounded-3xl overflow-hidden bg-black text-white flex items-end min-h-[400px] lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                            alt="model"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />

                    </div>

                </div>


            </div>


        </div>
    );
};

export default About;