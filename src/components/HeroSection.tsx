'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/hero.png"
                    alt="Beautiful India Landscape"
                    fill
                    className="object-cover scale-110" // Slight scale to avoid edges on parallax
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
            </motion.div>

            <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl font-serif"
                >
                    Incredible India
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="block text-3xl md:text-5xl mt-4 font-light text-orange-200 font-sans tracking-wide"
                    >
                        My Travel Stories
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto drop-shadow-lg font-light text-gray-100"
                >
                    Exploring the spiritual, adventurous, and royal beauty of India – One Journey at a Time.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    <a
                        href="#shegaon"
                        className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] border border-white/20 backdrop-blur-sm"
                    >
                        Start Exploring
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
                    />
                </div>
            </motion.div>
        </section>
    );
}
