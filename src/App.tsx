import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { MenuSection } from './components/MenuSection';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { ContactModal } from './components/ContactModal';
import { ConfigInfoModal } from './components/ConfigInfoModal';
import { BUSINESS_DATA } from './data/business';

export function App() {
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('');
  const [isConfigGuideOpen, setIsConfigGuideOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithTopic = (topic?: string) => {
    setContactTopic(topic || '');
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#151210] text-[#F5EFEB] font-sans selection:bg-[#B88246]/30 selection:text-[#FAF7F2]">
      {/* Top Navbar */}
      <Navbar
        onExploreClick={() => scrollToSection('suasana')}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onMenuClick={() => scrollToSection('menu')}
          onLocationClick={() => scrollToSection('lokasi')}
          onPhotoClick={(id) => setSelectedPhotoId(id)}
        />

        {/* About Section */}
        <About
          onPhotoClick={(id) => setSelectedPhotoId(id)}
          onExploreGallery={() => scrollToSection('suasana')}
        />

        {/* Features / Keunggulan */}
        <Features />

        {/* Menu Section */}
        <MenuSection
          onInquireMenu={(item) => handleOpenContactWithTopic(item)}
        />

        {/* Gallery / Suasana Kedai */}
        <Gallery
          onPhotoClick={(id) => setSelectedPhotoId(id)}
        />

        {/* Reviews Section */}
        <Reviews />

        {/* Location & Hours */}
        <Location />

        {/* CTA Section */}
        <CTASection
          onLocationClick={() => scrollToSection('lokasi')}
          onContactClick={() => handleOpenContactWithTopic()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => handleOpenContactWithTopic()}
        onOpenConfigGuide={() => setIsConfigGuideOpen(true)}
      />

      {/* Interactive Lightbox Modal */}
      <Lightbox
        photos={BUSINESS_DATA.realPhotos}
        currentPhotoId={selectedPhotoId}
        onClose={() => setSelectedPhotoId(null)}
        onSelectPhoto={(id) => setSelectedPhotoId(id)}
      />

      {/* Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialTopic={contactTopic}
      />

      {/* Complete Configuration & Deployment Guide Modal */}
      <ConfigInfoModal
        isOpen={isConfigGuideOpen}
        onClose={() => setIsConfigGuideOpen(false)}
      />
    </div>
  );
}

export default App;
