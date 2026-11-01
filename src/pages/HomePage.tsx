import React from 'react';
import { ProtocolHeader } from '../components/common/ProtocolHeader';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { HeroSection } from '../components/home/HeroSection';
import { MetricStrip } from '../components/home/MetricStrip';
import { FeaturedCaseCard } from '../components/home/FeaturedCaseCard';
import { MethodologySection } from '../components/home/MethodologySection';
import { ForensicLedgerSection } from '../components/home/ForensicLedgerSection';
import { SecureDropSection } from '../components/home/SecureDropSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-slate-800">
      {/* 1. Forensic Protocol Bar */}
      <ProtocolHeader />

      {/* 2. Global Navbar */}
      <Navbar />

      {/* 3. Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* 4-Column Key Metric Strip */}
        <MetricStrip />

        {/* Featured Case Spotlight Card (#BC-2026-08) */}
        <FeaturedCaseCard />

        {/* 4-Step Methodology Section */}
        <MethodologySection />

        {/* Live Forensic Ledger Catalog */}
        <ForensicLedgerSection />

        {/* Encrypted Secure Drop Box */}
        <SecureDropSection />
      </main>

      {/* 4. Public Footer */}
      <Footer />
    </div>
  );
};

