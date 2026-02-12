'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    reversed: boolean;
}

export default function BlogCard({ id, title, description, image, reversed }: BlogCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    // Mouse move handler for 3D effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!boxRef.current) return;

        const box = boxRef.current;
        const rect = box.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10; // Max 10 deg rotation
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;

        box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
        if (!boxRef.current) return;
        boxRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`max-w-7xl mx-auto py-20 px-4 flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 group perspective-1000`}
        >
            {/* Image Container with 3D Tilt */}
            <div
                ref={cardRef}
                className="w-full md:w-1/2 relative h-[400px] md:h-[500px] perspective-1000"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    ref={boxRef}
                    className="w-full h-full relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transition-transform duration-100 ease-out transform-style-3d bg-white"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transform scale-100"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ transform: 'translateZ(-50px)' }} // Push image back slightly
                    />

                    {/* Overlay Text with Pop-out effect */}
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                        style={{ transform: 'translateZ(50px)' }} // Bring text forward
                    >
                        <span className="text-white text-lg font-light tracking-wide">Explore {title.split('–')[0]}</span>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold font-serif text-slate-800 leading-tight"
                    initial={{ opacity: 0, x: reversed ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    {title}
                </motion.h2>

                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto md:mx-0 rounded-full" />

                <motion.p
                    className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {description}
                </motion.p>

                <motion.button
                    whileHover={{ x: 5 }}
                    className="group inline-flex items-center text-orange-600 font-semibold text-lg hover:text-orange-700 transition-colors mt-4 border-b-2 border-transparent hover:border-orange-500 pb-1"
                >
                    Read Full Story
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.button>
            </div>
        </motion.section>
    );
}
