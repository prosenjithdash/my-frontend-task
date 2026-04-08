
const Blog = () => {
    return (
       
        <div className="bg-[#f5f5f5] min-h-screen py-16 sm:py-20 px-4 sm:px-6">

            {/* Title */}
            <div className="text-center mb-12 sm:mb-16">
                <p className="text-xs tracking-[0.35em] text-gray-500 uppercase">
                    Insights
                </p>
            </div>

            {/* Grid Layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-5 sm:gap-6">

                    {/* Black Card */}
                    <div className="bg-black text-white p-5 sm:p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[140px]">
                        <p className="text-xs text-gray-400 mb-2">
                            WEB3 • NOV 07, 2025
                        </p>
                        <h3 className="text-base sm:text-lg font-medium leading-snug">
                            Seamless user interfaces, crafted with intent.
                        </h3>
                    </div>

                    {/* Image Card */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                            alt=""
                            className="w-full h-[220px] sm:h-[240px] lg:h-[260px] object-cover"
                        />

                        {/* Floating button */}
                        <div className="absolute bottom-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                            +
                        </div>
                    </div>
                </div>

                {/* MIDDLE COLUMN */}
                <div className="flex flex-col gap-5 sm:gap-6">

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                            alt=""
                            className="w-full h-[220px] sm:h-[240px] lg:h-[260px] object-cover"
                        />
                    </div>

                    {/* White Card */}
                    <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[140px]">
                        <p className="text-xs text-gray-400 mb-2">
                            WEB3 • NOV 07, 2025
                        </p>
                        <h3 className="text-base sm:text-lg font-medium text-gray-800">
                            Creative web platforms, designed for growth.
                        </h3>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-5 sm:gap-6">

                    {/* Black Card */}
                    <div className="bg-black text-white p-5 sm:p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[140px]">
                        <p className="text-xs text-gray-400 mb-2">
                            WEB3 • NOV 07, 2025
                        </p>
                        <h3 className="text-base sm:text-lg font-medium leading-snug">
                            Immersive virtual journeys, built with precision
                        </h3>
                    </div>

                    {/* Bottom Image */}
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                            alt=""
                            className="w-full h-[220px] sm:h-[240px] lg:h-[260px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;