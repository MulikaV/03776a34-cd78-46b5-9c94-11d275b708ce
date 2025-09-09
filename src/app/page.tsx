use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterBase from '@/components/footer/FooterBase';

const navItems = [
  { name: 'Hero', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'FAQ', id: 'faq' },
  { name: 'How to Buy', id: 'how-to-buy' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Footer', id: 'footer' }
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutSplitBottom
        navItems={navItems}
        logoSrc="/images/logo.svg"
        logoWidth={120}
        logoHeight={40}
        buttonText="Shop Now"
        onButtonClick={() => alert('Button clicked!')}
        className="fixed top-0 left-0 right-0 z-50"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to Pixel Arcade Store"
          description="Your one-stop shop for pixel-art themed merchandise!"
          primaryButtonText="Shop Now"
          secondaryButtonText="Explore More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About Pixel Arcade"
          descriptions={["We are passionate about pixel art!", "Explore our unique collections.", "Join our vibrant community."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics Overview"
          description="Learn about our loyalty programs and retro-credits."
          kpiItems={[
            { value: "300K", description: "Tokens in circulation", longDescription: "Count of active tokens", icon: 'LucideIcon' },
            { value: "75%", description: "Community winners", longDescription: "Earned by loyal players", icon: 'LucideIcon' },
            { value: "0.1", description: "Cost per token", longDescription: "In USD", icon: 'LucideIcon' },
          ]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[
            { title: "How do I purchase tokens?", content: "Visit the store and add items to your cart!" },
            { title: "What is the token value?", content: "Each token is worth $0.1." },
            { title: "Where can I use my tokens?", content: "You can use tokens in our online store." },
            { title: "Is there a loyalty program?", content: "Yes! Earn rewards as you shop." }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={60}
          logoHeight={60}
          columns={[
            { title: "Support", items: [
              { label: "Contact Us", onClick: () => alert('Contact Us') },
              { label: "FAQs", onClick: () => alert('FAQs') }
            ] },
            { title: "Company", items: [
              { label: "About Us", onClick: () => alert('About Us') },
              { label: "Careers", onClick: () => alert('Careers') }
            ] },
            { title: "Legal", items: [
              { label: "Privacy Policy", onClick: () => alert('Privacy Policy') }
            ] }
          ]}
          copyrightText="© 2023 Pixel Arcade. All rights reserved."
          onPrivacyClick={() => alert('Privacy Policy')}
        />
      </div>
    </SiteThemeProvider>
  );
}
