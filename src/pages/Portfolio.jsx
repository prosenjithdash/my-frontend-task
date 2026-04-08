const Portfolio = () => {
   
    return (
        <div className="bg-[#f5f5f5] py-16">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <h2 className="text-gray-500 text-sm tracking-widest">PORTFOLIO</h2>
                <div className="h-[1px] bg-gray-300 mt-2 w-full" />
            </div>


            <div>
                {/* cards */}
                < div className="flex flex-wrap justify-between gap-6 md:gap-8">
                    {/* card 01 */}
                    <div className=" w-full sm:w-[48%] flex justify-center ">

                        {/* Card Container */}
                        <div className="w-full max-w-[600px] bg-white rounded-2xl overflow-hidden shadow-lg">

                            {/* Image Section */}
                            <div className="relative h-[220px] sm:h-[300px] md:h-[420px] lg:h-[480px]">

                                {/* Background Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200"
                                    alt="car"
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

                                {/* Top Left Logo */}
                                <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
                                    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-xs">
                                        +
                                    </div>
                                    <span className="text-sm sm:text-base font-semibold">
                                        Logoipsum
                                    </span>
                                </div>

                                {/* Top Right Arrow Button */}
                                <div className="absolute top-4 right-4">
                                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
                                        ↗
                                    </button>
                                </div>

                                {/* Bottom Left Tag */}
                                <div className="absolute bottom-4 left-4 text-white text-xs sm:text-sm tracking-widest">
                                    BRANDING, UX
                                </div>
                            </div>

                            {/* Bottom Info Section */}
                            <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 bg-gray-100">
                                <h2 className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
                                    ALDAN BRANDING
                                </h2>
                                <span className="text-xs sm:text-sm text-gray-500">2025</span>
                            </div>

                        </div>
                    </div>

                    {/* card 02  */}
                    <div className="w-full sm:w-[48%] flex justify-center ">

                        {/* Card Container */}
                        <div className="w-full max-w-[600px] bg-white rounded-2xl overflow-hidden shadow-lg">

                            {/* Image Section */}
                            <div className="relative h-[220px] sm:h-[300px] md:h-[420px] lg:h-[480px]">

                                {/* Background Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=1200"
                                    alt="vision"
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

                                {/* Top Left Logo */}
                                <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
                                    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-xs">
                                        +
                                    </div>
                                    <span className="text-sm sm:text-base font-semibold">
                                        Logoipsum
                                    </span>
                                </div>

                                {/* Top Right Arrow Button */}
                                <div className="absolute top-4 right-4">
                                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
                                        ↗
                                    </button>
                                </div>

                                {/* Bottom Left Tag */}
                                <div className="absolute bottom-4 left-4 text-white text-xs sm:text-sm tracking-widest">
                                    BRANDING.MODULE.PRODUCT.UX.WEBSITE
                                </div>
                            </div>

                            {/* Bottom Info Section */}
                            <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 bg-gray-100">
                                <h2 className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
                                    ALDAN BRANDING
                                </h2>
                                <span className="text-xs sm:text-sm text-gray-500">2025</span>
                            </div>

                        </div>
                    </div>
                </div>


                {/* card 03  */}
                <div className="w-full my-10 flex justify-center">

                    {/* Card Container */}
                    <div className=" w-full max-w-[1240px] bg-white rounded-2xl overflow-hidden shadow-lg">

                        {/* Image Section */}
                        <div className="relative h-[220px] sm:h-[300px] md:h-[420px] lg:h-[480px]">

                            {/* Background Image */}
                            <img
                                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200"
                                className="w-full h-full object-cover"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

                            {/* Top Left Logo */}
                            <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
                                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-xs">
                                    +
                                </div>
                                <span className="text-sm sm:text-base font-semibold">
                                    Logoipsum
                                </span>
                            </div>

                            {/* Top Right Arrow Button */}
                            <div className="absolute top-4 right-4">
                                <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
                                    ↗
                                </button>
                            </div>

                            {/* Bottom Left Tag */}
                            <div className="absolute bottom-4 left-4 text-white text-xs sm:text-sm tracking-widest">
                                BRANDING.MODULE.PRODUCT.UX.WEBSITE
                            </div>
                        </div>

                        {/* Bottom Info Section */}
                        <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 bg-gray-100">
                            <h2 className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
                                ALDAN BRANDING
                            </h2>
                            <span className="text-xs sm:text-sm text-gray-500">2025</span>
                        </div>

                    </div>
                </div>

                {/* cards 4 and 5 */}
                < div className="flex flex-wrap justify-between gap-6 md:gap-8">
                    {/* card 04 */}
                    <div className=" w-full sm:w-[48%] flex justify-center ">

                        {/* Card Container */}
                        <div className="w-full max-w-[600px] bg-white rounded-2xl overflow-hidden shadow-lg">

                            {/* Image Section */}
                            <div className="relative h-[220px] sm:h-[300px] md:h-[420px] lg:h-[480px]">

                                {/* Background Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200"
                                    alt="running man"
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

                                {/* Top Left Logo */}
                                <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
                                    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-xs">
                                        +
                                    </div>
                                    <span className="text-sm sm:text-base font-semibold">
                                        Logoipsum
                                    </span>
                                </div>

                                {/* Top Right Arrow Button */}
                                <div className="absolute top-4 right-4">
                                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
                                        ↗
                                    </button>
                                </div>

                                {/* Bottom Left Tag */}
                                <div className="absolute bottom-4 left-4 text-white text-xs sm:text-sm tracking-widest">
                                    BRANDING.PRODUCT.UX
                                </div>
                            </div>

                            {/* Bottom Info Section */}
                            <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 bg-gray-100">
                                <h2 className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
                                    ALDAN BRANDING
                                </h2>
                                <span className="text-xs sm:text-sm text-gray-500">2025</span>
                            </div>

                        </div>
                    </div>

                    {/* card 05  */}
                    <div className="w-full sm:w-[48%] flex justify-center ">

                        {/* Card Container */}
                        <div className="w-full max-w-[600px] bg-white rounded-2xl overflow-hidden shadow-lg">

                            {/* Image Section */}
                            <div className="relative h-[220px] sm:h-[300px] md:h-[420px] lg:h-[480px]">

                                {/* Background Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200"
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

                                {/* Top Left Logo */}
                                <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
                                    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-xs">
                                        +
                                    </div>
                                    <span className="text-sm sm:text-base font-semibold">
                                        Logoipsum
                                    </span>
                                </div>

                                {/* Top Right Arrow Button */}
                                <div className="absolute top-4 right-4">
                                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
                                        ↗
                                    </button>
                                </div>

                                {/* Bottom Left Tag */}
                                <div className="absolute bottom-4 left-4 text-white text-xs sm:text-sm tracking-widest">
                                    BRANDING.MODULE.PRODUCT.UX.WEBSITE
                                </div>
                            </div>

                            {/* Bottom Info Section */}
                            <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 bg-gray-100">
                                <h2 className="text-sm sm:text-base md:text-lg font-medium tracking-wide">
                                    ALDAN BRANDING
                                </h2>
                                <span className="text-xs sm:text-sm text-gray-500">2025</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Portfolio;