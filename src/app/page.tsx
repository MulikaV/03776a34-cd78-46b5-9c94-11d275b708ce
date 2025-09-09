"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterBase from '@/components/footer/FooterBase';
import { Star } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutSplitBottom 
        logoSrc="/images/logo.svg"
        logoWidth={80}
        logoHeight={32}
        buttonText="Shop Now"
        onButtonClick={() => { /* handle click */ }}
        navItems={[{ name: 'Pixel Arcade', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'FAQ', id: 'faq' }, { name: 'Footer', id: 'footer' }]}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to Pixel Arcade"
          description="Dive into our pixel-art universe and enjoy retro gaming experiences."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About Pixel Arcade"
          descriptions={["We bring you the nostalgia of classic gaming with modern features.", "Our mission is to create fun and engaging pixel-art experiences."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Learn about our loyalty tokens and their benefits."
          kpiItems={[{ value: '100k', description: 'Total Tokens issued', longDescription: 'Our loyalty tokens are designed to reward our users.', icon: Star }]}  // mapped icon to correct type
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[{ title: 'What is Pixel Arcade?', content: 'It’s a platform for retro gaming.' }, { title: 'How can I buy tokens?', content: 'You can purchase directly on our site.' }]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={80}
          logoHeight={32}
          columns={[{ title: 'Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] }, { title: 'Support', items: [{ label: 'FAQ', onClick: () => {} }, { label: 'Terms', onClick: () => {} }] }]} 
          copyrightText="© 2023 Pixel Arcade"
          onPrivacyClick={() => { /* handle click */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}