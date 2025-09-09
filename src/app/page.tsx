"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterBase from '@/components/footer/FooterBase';
import { Users, Shield } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        buttonText="Shop Now"
        onButtonClick={() => {}}
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'FAQ', id: 'faq' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' }
        ]}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to Pixel Arcade Store"
          description="Dive into awesome pixel-art adventures!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About Pixel Arcade"
          descriptions={["Retro gaming experience like no other!", "Join us for a journey back in time."]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[
            { title: 'What is Pixel Arcade?', content: 'A gaming platform dedicated to the retro vibe.' },
            { title: 'How do I purchase pixels?', content: 'Simply follow the steps outlined in our how-to-buy section.' },
            { title: 'Do you offer refunds?', content: 'Yes, check our policy in the footer.' }
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Explore our unique token distribution!"
          kpiItems={[
            { value: '500,000', description: 'Total Tokens', longDescription: 'A comprehensive overview of our token distribution.', icon: Users },
            { value: '30%', description: 'Market Reserve', longDescription: 'Tokens reserved for market incentives.', icon: Shield }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: 'Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'FAQ', onClick: () => {} }] },
            { title: 'Contact', items: [{ label: 'Support', onClick: () => {} }, { label: 'Feedback', onClick: () => {} }] },
            { title: 'Social', items: [{ label: 'Twitter', onClick: () => {} }, { label: 'Discord', onClick: () => {} }] }
          ]}
          copyrightText="© 2023 Pixel Arcade. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
