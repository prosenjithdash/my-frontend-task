import React from 'react';

const Footer = () => {
    return (
        <footer className="max-w-7xl rounded-2xl mx-auto bg-black text-white mb-10">

            {/* Container (centered content) */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-24">

                {/* Top Heading */}
                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl sm:text-6xl md:text-9xl lg:text-9xl  leading-tight font-extrabold text-white/45">
                        Let’s talk
                    </h1>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white/45 -mt-2">
                        now
                    </h2>

                    {/* subtle circle */}
                    <div className="mt-10 flex justify-center">
                        <div className="w-44 h-44 border border-white/20 rounded-full animate-pulse">
                    <p className='rounded-2xl border text-white/50'>GET IN TOUCH</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-start  justify-between gap-10">

                    {/* Left Image */}
                    <div className="w-full md:w-[620px]">
                        <img
                            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=400"
                            alt="team"
                            className="w-full h-[460px] object-cover rounded-xl"
                        />
                        <h3 className="text-lg md:text-[70px] mt-4 font-light text-white/20">Floka</h3>
                    </div>

                    {/* Middle Links */}
                    <div className="flex flex-col gap-3 text-sm md:text-4xl text-white/80 space-y-9">
                        <a href="#">About Us</a>
                        <a href="#">Journal</a>
                        <a href="#">Faq</a>
                        <a href="#">Get In Touch</a>
                        <a href="#">Careers</a>
                    </div>

                    {/* Right Content */}
                    <div className="max-w-sm text-sm md:text-xl text-white/60 space-y-4">
                        <p>
                            A <span className='text-white/90'>Foka</span>, we believe brands should be more than just functional —
                            they should tell your story. We focus on timeless design,
                            thoughtful interaction, and impactful experiences.
                        </p>

                        <div className='text-white/90 pt-12'>
                            <p>info@fokaagency.com</p>
                            <p>+123 456 789</p>
                            <p>New York, USA</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 pt-2 ">
                            <div className="w-16 h-16  border border-white/20 rounded-full flex items-center justify-center">
                                f
                            </div>
                            <div className="w-16 h-16  border border-white/20 rounded-full flex items-center justify-center">
                                in
                            </div>
                            <div className="w-16 h-16  border border-white/20 rounded-full flex items-center justify-center">
                                ig
                            </div>
                            <div className="w-16 h-16  border border-white/20 rounded-full flex items-center justify-center">
                                x
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Line */}
                <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/40">
                    Copyright © 2025 Foka Studio
                </div>

            </div>
        </footer>
    );
}

export default Footer;