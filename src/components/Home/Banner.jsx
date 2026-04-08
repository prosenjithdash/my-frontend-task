import { motion } from "framer-motion";
import { useEffect } from "react";


const Banner = () => {


    // 🔥 Mouse Parallax
    useEffect(() => {
        const move = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            const el = document.querySelector(".parallax");
            if (el) {
                el.style.transform = `translate(${x}px, ${y}px)`;
            }
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);


    return (
        <section className="relative h-screen w-full overflow-hidden rounded-2xl mt-4">

            {/* Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="https://media.w3.org/2010/05/sintel/trailer.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16">

                {/* LEFT TEXT */}
                <motion.div
                    className="parallax mt-20 md:mt-0 text-center md:text-left"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-white/90 font-bold leading-none
                         text-[60px] sm:text-[80px] md:text-[120px]">
                        Floka
                    </h1>

                    <p className="text-gray-300 mt-2
                        text-[28px] sm:text-[32px] md:text-[40px]">
                        Studio
                    </p>
                </motion.div>

                {/* RIGHT CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    className="mt-10 md:mt-0"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="
              backdrop-blur-2xl 
              bg-white/10 
              border border-white/20 
              rounded-2xl 
              p-6 
              w-[280px] sm:w-[320px] md:w-[340px]
              shadow-xl
            "
                    >

                        {/* Profile */}
                        <div className="flex items-center gap-3">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                className="w-12 h-12 rounded-lg object-cover"
                            />

                            <div>
                                <p className="text-xs text-gray-300 uppercase tracking-wider">
                                    Head of Idea
                                </p>
                                <h3 className="text-white font-semibold text-sm">
                                    Almond D. Nelsi
                                </h3>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="mt-5 flex items-center gap-3 
                               bg-white text-black 
                               px-4 py-2 rounded-full 
                               hover:scale-105 transition">
                            <span className="text-lg font-bold">+</span>
                            <span className="text-sm font-medium">
                                LET'S TALK
                            </span>
                        </button>

                        {/* Text */}
                        <p className="text-gray-300 text-sm mt-5 leading-relaxed">
                            No cookie-cutter websites. No fluff. Just real tools and smart
                            strategies to grow your business and elevate your brand.
                        </p>

                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Banner;


