// ABOUT.JSX FILE

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

                        <div className="relative p-6 z-10">
                            <p className="text-lg leading-relaxed">
                                “ At Floka, we merge strategy, creativity, and technology to shape brands that people love. ”
                            </p>
                            <p className="text-sm text-gray-300 mt-3">
                                Merizo H. Yelso / CEO
                            </p>
                        </div>

                    </div>

                    {/* Right part */}
                    <div className="flex flex-col gap-6">
                        {/* FOLLOW CARD */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm">
                            <p className="text-xs text-gray-400">Follow us</p>
                            <h3 className="text-lg font-semibold mb-4">For check updates</h3>

                            <div className="flex flex-wrap gap-2">
                                {["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"].map((item) => (
                                    <button
                                        key={item}
                                        className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* PROGRESS CARD */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm">
                            <p className="text-xs text-gray-400 mb-4">Impressions</p>

                            {/* Bar */}
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Solutions</span>
                                        <span>100%</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full" />
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>UI/UX</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="h-2 bg-black rounded-full w-[90%]" />
                                </div>

                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Explore</span>
                                        <span>72%</span>
                                    </div>
                                    <div className="h-2 bg-gray-300 rounded-full w-[72%]" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;