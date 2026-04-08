import React from "react";
import { Plus } from "lucide-react";

const GetInTouch = () => {
    return (
        <div className="bg-black rounded-xl p-3 sm:p-6">

            {/* Container */}
            <div className="rounded-2xl overflow-hidden min-h-[90vh] flex items-center">

                <div className="w-full grid grid-cols-1 lg:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div
                        className="relative text-white px-6 sm:px-10 lg:px-16 py-12 sm:py-16 flex flex-col justify-between "
                        
                    >
                        {/* Noise overlay */}
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

                        {/* Content */}
                        <div className="relative z-10 max-w-xl">

                            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                                Get in touch
                            </p>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-10">
                                Tell us about your project —whether it’s a website, SEO, or
                                marketing.
                            </h1>

                            {/* Info Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-300">

                                <div>
                                    <p className="uppercase text-xs text-gray-500 mb-2">
                                        Talk to us
                                    </p>
                                    <p>Work and general inquiries</p>
                                    <p className="mt-1">+123 456 789 00</p>
                                </div>

                                <div>
                                    <p className="uppercase text-xs text-gray-500 mb-2">
                                        Post address
                                    </p>
                                    <p>
                                        541 Melville Ave, Palo Alto, CA 94301, United States
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE (FORM) */}
                    <div className="bg-[#f3f3f3] flex items-center justify-center px-4 sm:px-8 py-10 sm:py-14 rounded-xl">

                        <div className="w-full max-w-md bg-[#eeeeee] rounded-2xl p-6 sm:p-8 shadow-md">

                            <h2 className="text-lg font-medium text-gray-800 mb-6">
                                Have a project in mind?
                            </h2>

                            {/* Inputs */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="YOUR NAME"
                                    className="bg-[#e5e5e5] rounded-lg px-4 py-3 text-sm outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="BUSINESS EMAIL"
                                    className="bg-[#e5e5e5] rounded-lg px-4 py-3 text-sm outline-none"
                                />
                            </div>

                            {/* Select Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <select className="bg-[#e5e5e5] rounded-lg px-4 py-3 text-sm outline-none">
                                    <option>$1000 - $5000</option>
                                    <option>$5000 - $10000</option>
                                </select>

                                <select className="bg-[#e5e5e5] rounded-lg px-4 py-3 text-sm outline-none">
                                    <option>Consultancy</option>
                                    <option>Development</option>
                                </select>
                            </div>

                            {/* Message */}
                            <textarea
                                rows="4"
                                placeholder="MESSAGE"
                                className="w-full bg-[#e5e5e5] rounded-lg px-4 py-3 text-sm outline-none mb-6 resize-none"
                            ></textarea>

                            {/* Button */}
                            <button className="flex items-center gap-3 text-sm font-medium">
                                <span className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full">
                                    <Plus size={16} />
                                </span>
                                LET’S TALK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;