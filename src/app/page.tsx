'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MapSection from '../components/MapSection';
import BlogCard from '../components/BlogCard';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const destinations = [
    {
      id: 'shegaon',
      title: 'Shegaon – Spiritual & Peaceful Journey',
      description: 'Experience the divine tranquility of Shri Gajanan Maharaj Temple. The spiritual aura here is unmatched, providing a sense of deep peace and devotion. Visit the magnificent Anand Sagar project, a spiritual entertainment center designed for meditation and relaxation amidst nature.',
      image: '/shegaon_real.jpg',
      lat: 20.7936,
      lng: 76.6914,
    },
    {
      id: 'manali',
      title: 'Manali – Mountains & Snow',
      description: 'Escape to the majestic Himalayas. Manali offers breathtaking views of snow-covered peaks, the adventure of Solang Valley, and the serenity of tall pine forests. Whether you seek adrenaline-pumping sports or quiet contemplation by the river Beas, Manali has it all.',
      image: '/manali_real.jpg',
      lat: 32.2432,
      lng: 77.1892,
    },
    {
      id: 'jaipur',
      title: 'Jaipur – The Pink City',
      description: 'Immerse yourself in the royal heritage of Rajasthan. Jaipur, the Pink City, is home to the stunning Hawa Mahal, the grand Amer Fort, and vibrant local markets. Explore the rich culture, traditional art, and architectural marvels that tell stories of a glorious past.',
      image: '/jaipur_real.jpg',
      lat: 26.9124,
      lng: 75.7873,
    },
    {
      id: 'laddakh',
      title: 'Laddakh – The Land of High Passes',
      description: 'Explore the stark beauty of the Himalayas. Visit the mesmerizing Pangong Lake, cross the highest motorable road at Khardung La, and experience the unique culture of this high-altitude desert. A paradise for bikers and adventure seekers alike.',
      image: '/laddakh_cover.jpg',
      lat: 34.1526,
      lng: 77.5771,
    },
    {
      id: 'kailash-mansarovar',
      title: 'Kailash Mansarovar – The Sacred Journey',
      description: 'Embark on a spiritual pilgrimage to the abode of Lord Shiva. Circumambulate the holy Mount Kailash and take a dip in the pristine waters of Lake Mansarovar. This journey is not just a travel experience but a profound spiritual awakening.',
      image: '/kailash_real.webp',
      lat: 31.0674,
      lng: 81.3119,
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-100 via-pink-100 to-amber-100 overflow-hidden">
      <Navbar />

      <HeroSection />

      <div className="py-20 space-y-24">
        {destinations.map((dest, index) => (
          <BlogCard
            key={dest.id}
            {...dest}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>

      <MapSection destinations={destinations} />

      <ContactSection />

      <Footer />
    </main>
  );
}
