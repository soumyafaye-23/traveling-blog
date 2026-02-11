'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-slate-900 text-slate-300 py-16"
        >
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-white font-bold">Incredible India</h3>
                    <p className="text-sm leading-relaxed">
                        Exploring the hidden gems, spiritual centers, and majestic landscapes of India. Join me on this journey of discovery.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Destinations</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#shegaon" className="hover:text-orange-400 transition-colors">Shegaon</a></li>
                        <li><a href="#manali" className="hover:text-orange-400 transition-colors">Manali</a></li>
                        <li><a href="#jaipur" className="hover:text-orange-400 transition-colors">Jaipur</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-400 transition-colors">About Me</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold text-white mb-4">Stay Connected</h4>
                    <div className="flex space-x-4">
                        {/* Social Icons (Placeholders) */}
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                            <span className="sr-only">Instagram</span>
                            📷
                        </div>
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                            <span className="sr-only">Twitter</span>
                            🐦
                        </div>
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                            <span className="sr-only">YouTube</span>
                            ▶️
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
                &copy; {new Date().getFullYear()} Incredible India Travel Blog. All rights reserved.
            </div>
        </motion.footer>
    );
}
