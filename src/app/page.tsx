'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
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
    },
    {
      id: 'manali',
      title: 'Manali – Mountains & Snow',
      description: 'Escape to the majestic Himalayas. Manali offers breathtaking views of snow-covered peaks, the adventure of Solang Valley, and the serenity of tall pine forests. Whether you seek adrenaline-pumping sports or quiet contemplation by the river Beas, Manali has it all.',
      image: '/manali_real.jpg',
    },
    {
      id: 'jaipur',
      title: 'Jaipur – The Pink City',
      description: 'Immerse yourself in the royal heritage of Rajasthan. Jaipur, the Pink City, is home to the stunning Hawa Mahal, the grand Amer Fort, and vibrant local markets. Explore the rich culture, traditional art, and architectural marvels that tell stories of a glorious past.',
      image: '/jaipur_real.jpg',
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50 overflow-hidden">
      <Navbar />

      <HeroSection />

      <div className="py-20 bg-stone-50 space-y-24">
        {destinations.map((dest, index) => (
          <BlogCard
            key={dest.id}
            {...dest}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>

      <ContactSection />

      <Footer />
    </main>
  );
}
