'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icon in Next.js
const icon = L.icon({
    iconUrl: '/location-pin.png', // We'll need a pin icon, or use default from CDN
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Using CDN for default icons as fallback if local asset missing
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Destination {
    id: string;
    title: string;
    lat: number;
    lng: number;
}

interface MapProps {
    destinations: Destination[];
}

export default function Map({ destinations }: MapProps) {
    // Center roughly on India
    const position: [number, number] = [20.5937, 78.9629];

    return (
        <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white/50">
            <MapContainer center={position} zoom={4} scrollWheelZoom={false} className="h-full w-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {destinations.map((dest) => (
                    <Marker key={dest.id} position={[dest.lat, dest.lng]}>
                        <Popup>
                            <div className="text-center">
                                <h3 className="font-bold text-orange-600">{dest.title.split('–')[0]}</h3>
                                <p className="text-sm text-gray-600">Click for details</p>
                                {/* We could add link here or smooth scroll */}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
