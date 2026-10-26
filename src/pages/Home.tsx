import React from 'react';
import Header from '../components/auth/Header';
import Hero from '../components/Home/Hero';
import BrandSetupCard from '../components/Home/BrandSetupCard';
import BrandSelection from '../components/Home/BrandSelection';
import Products from '../components/Home/Products';
import Issues from '../components/Home/Issues';
import CtaSection from '../components/Home/CtaSection';
import Services from '../components/Home/Services';
import About from '../components/Home/About';
import Mission from '../components/Home/Mission';
import FinalCta from '../components/Home/FinalCta';
import Footer from '../components/Home/Footer';
import type { BrandId } from '../components/BrandSetup';

interface HomeProps {
  onNavigate?: (page: any, category?: string | null) => void;
  onSelectBrand?: (brand: BrandId) => void;
  onSelectProduct?: (productId: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onSelectBrand, onSelectProduct }) => {
  return (
    <>
      <Header onNavigate={onNavigate} currentPage="home" />
      <Hero onNavigate={onNavigate} onSelectBrand={onSelectBrand} />

      <section className="bg-slate-50 py-14 sm:py-16 border-b border-slate-200/80" id="brand-launchpad">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-200/80">
            <BrandSetupCard onSelectBrand={onSelectBrand} prefixId="home-inline-brand" />
          </div>
        </div>
      </section>

      <BrandSelection onNavigate={onNavigate} onSelectProduct={onSelectProduct} />
      <Products onNavigate={onNavigate} />
      <Issues onNavigate={onNavigate} />
      <CtaSection onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <About onNavigate={onNavigate} />
      <Mission />
      <FinalCta onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Home;
