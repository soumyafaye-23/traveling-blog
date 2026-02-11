'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-indigo-900 to-purple-800 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold font-serif text-white mb-8"
                >
                    Let's Connect
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-indigo-100 mb-12 text-lg md:text-xl font-light"
                >
                    Have a story to share or a question about my travels? <br />
                    I'd love to hear from you. Drop me a message below!
                </motion.p>

                <motion.form
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                    className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl space-y-6 border border-white/20 max-w-lg mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-white/5 border border-indigo-200/30 rounded-xl px-4 py-3 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-white/5 border border-indigo-200/30 rounded-xl px-4 py-3 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                        />
                    </div>
                    <textarea
                        rows={4}
                        placeholder="Your Message..."
                        className="w-full bg-white/5 border border-indigo-200/30 rounded-xl px-4 py-3 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-shadow"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
