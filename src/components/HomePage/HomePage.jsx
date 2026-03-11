"use client";
import styles from "./HomePage.module.scss";
import SectionHeader from "../ui/SectionHeader/SectionHeader";
import MarketOverview from "./MarketOverview/MarketOverview";
import Testimonials from "./Testimonials/Testimonials";
import SafeLink from "../SafeLink/SafeLink";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import PartnersMarquee from "./PartnersMarquee/PartnersMarquee";
import InvestmentCTA from "./InvestmentCTA/InvestmentCTA";
import AboutPreview from "./AboutPreview/AboutPreview";
import Hero from "./Hero/Hero";

const mockProperties = [
  {
    id: 1,
    title: "1857 Bel Air Rd, Los Angeles, CA 90077",
    date: "August 7, 2023",
    image: "/home/0b0c8d1471b5f46b14755075c0e185ba33f5f9c2.png",
  },
  {
    id: 2,
    title: "1165 Somera Rd, Los Angeles, CA 90077",
    date: "August 7, 2023",
    image: "/home/10a2301a22641591e03e7f7c1bd201d9a8157e8c.png",
  },
  {
    id: 3,
    title: "1165 Somera Rd, Los Angeles, CA 90077",
    date: "August 7, 2023",
    image: "/home/22260f7191dd16be582f7c403b42e7ed39dd9cfe.png",
  },
  {
    id: 4,
    title: "1857 Bel Air Rd, Los Angeles, CA 90077",
    date: "August 7, 2023",
    image: "/home/27c07a7521f6bd3c2ea8333f29837294ba4264c4.png",
  },
];

const mockOffPlanProjects = [
  {
    id: 1,
    title: "Jumeirah Residences Emirates Towers",
    date: "August 7, 2023",
    image: "/home/f8ae2c8375627aa8c5cd54c959e4b0e5007b3f9b.png",
    price: "1.1M",
    isAED: false,
  },
  {
    id: 2,
    title: "Expo Living by Emaar",
    date: "August 7, 2023",
    image: "/home/a34edec045d5cde7c34e251fbdee8abbfe513189.jpg",
    price: "720 000",
    isAED: true,
  },
  {
    id: 3,
    title: "Mina Al Arab",
    date: "August 7, 2023",
    image: "/home/22260f7191dd16be582f7c403b42e7ed39dd9cfe.png",
    price: "720 000",
    isAED: true,
  },
  {
    id: 4,
    title: "Expo Living by Emaar",
    date: "August 7, 2023",
    image: "/home/27c07a7521f6bd3c2ea8333f29837294ba4264c4.png",
    price: "720 000",
    isAED: true,
  },
  {
    id: 5,
    title: "Jumeirah Residences Emirates Towers",
    date: "August 7, 2023",
    image: "/home/0b0c8d1471b5f46b14755075c0e185ba33f5f9c2.png",
    price: "1.1M",
    isAED: false,
  },
];

const mockNewsArticles = [
  {
    id: 1,
    title: "Dubai Property Market Sees Surge in Luxury Investments",
    date: "August 7, 2023",
    image: "/home/a34edec045d5cde7c34e251fbdee8abbfe513189.jpg",
    href: "/news/dubai-property-market-surge",
  },
  {
    id: 2,
    title: "Dubai Property Market Sees Surge in Luxury Investments",
    date: "March 23, 2024",
    image: "/home/f8ae2c8375627aa8c5cd54c959e4b0e5007b3f9b.png",
    href: "/news/luxury-investments-march",
  },
  {
    id: 3,
    title: "Dubai Real Estate Sees Strong Growth in 2025",
    date: "September 16, 2024",
    image: "/home/0b0c8d1471b5f46b14755075c0e185ba33f5f9c2.png",
    href: "/news/dubai-real-estate-growth-2025",
  },
  {
    id: 4,
    title: "Dubai Property Market Sees Surge in Luxury Investments",
    date: "March 23, 2024",
    image: "/home/10a2301a22641591e03e7f7c1bd201d9a8157e8c.png",
    href: "/news/luxury-investments-2",
  },
  {
    id: 5,
    title: "Dubai Real Estate Sees Strong Growth in 2025",
    date: "September 16, 2024",
    image: "/home/22260f7191dd16be582f7c403b42e7ed39dd9cfe.png",
    href: "/news/strong-growth-2025",
  },
];

const secondaryMockProperties = [
  {
    id: 1,
    title: "Jumeirah Residences Emirates Towers",
    date: "August 7, 2023",
    image: "/home/0b0c8d1471b5f46b14755075c0e185ba33f5f9c2.png",
    price: "1.1M",
    isAED: false,
  },
  {
    id: 2,
    title: "Expo Living by Emaar",
    date: "August 7, 2023",
    image: "/home/10a2301a22641591e03e7f7c1bd201d9a8157e8c.png",
    price: "720 000",
    isAED: true,
  },
  {
    id: 3,
    title: "Mina Al Arab",
    date: "August 7, 2023",
    image: "/home/22260f7191dd16be582f7c403b42e7ed39dd9cfe.png",
    price: "720 000",
    isAED: true,
  },
  {
    id: 4,
    title: "Expo Living by Emaar",
    date: "August 7, 2023",
    image: "/home/27c07a7521f6bd3c2ea8333f29837294ba4264c4.png",
    price: "720 000",
    isAED: true,
  },
  {
    id: 5,
    title: "Jumeirah Residences Emirates Towers",
    date: "August 7, 2023",
    image: "/home/0b0c8d1471b5f46b14755075c0e185ba33f5f9c2.png",
    price: "1.1M",
    isAED: false,
  },
];

export default function HomePage() {
  return (
    <div className={`${styles.home} g-container`}>
      <Hero />

      <FeaturedProjects properties={mockProperties} />
      <AboutPreview />
      <PartnersMarquee />
      <FeaturedProjects
        properties={secondaryMockProperties}
        title="Secondary properties"
        seeAllLink="/properties"
        seeAllText="See all units"
      />
      <MarketOverview />
      <FeaturedProjects
        properties={mockOffPlanProjects}
        title="Latest off-plan projects"
        seeAllLink="/off-plan"
        seeAllText="See all projects"
      />
      <Testimonials />
      <FeaturedProjects
        properties={mockNewsArticles}
        title="News center"
        seeAllLink="/news"
        seeAllText="See all articles"
        ctaText="Read more"
      />
      <InvestmentCTA/>
    </div>
  );
}
