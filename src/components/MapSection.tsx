'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Map = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center text-slate-400">Loading Map...</div>
});

interface Destination {
    id: string;
    title: string;
    lat: number;
    lng: number;
}

interface MapSectionProps {
    destinations: Destination[];
}

export default function MapSection({ destinations }: MapSectionProps) {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-serif font-bold text-slate-800">Explore Locations</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Visualize your journey across these magnificent destinations.
                    </p>
                </div>

                <Map destinations={destinations} />
            </motion.div>
        </section>
    );
}
