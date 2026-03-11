"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./HomePage.module.scss";
import SectionHeader from "../ui/SectionHeader/SectionHeader";
import MarketOverview from "./MarketOverview/MarketOverview";
import Testimonials from "./Testimonials/Testimonials";
import VideoStatic from "../VideoStatic/VideoStatic";
import Search from "../../assets/icons/Search";
import SafeLink from "../SafeLink/SafeLink";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import PartnersMarquee from "./PartnersMarquee/PartnersMarquee";

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
  const t = useTranslations("HomePage");
  const [activeTab, setActiveTab] = useState("rent");
  return (
    <div className={`${styles.home} g-container`}>
      <section className={styles.home__hero}>
        <VideoStatic src="/home/Dubai Skyline, from Day to Night _ Dubai, UAE - Copyright Free Video - No Copyright (1080p, h264).mp4" />
        <div className={styles.home__hero__overlay}></div>
        <div className={`g-container ${styles.home__hero__container}`}>
          <div className={styles.home__hero__content}>
            <h1 className={styles.home__hero__content__title}>{t("title")}</h1>
            <p className={styles.home__hero__content__subtitle}>
              {t("subtitle")}
            </p>
          </div>

          <div className={styles.home__hero__search}>
            <div className={styles.home__hero__search__tabs}>
              <button
                onClick={() => setActiveTab("buy")}
                className={`${styles.home__hero__search__tabs__btn} ${activeTab === "buy" ? styles["home__hero__search__tabs__btn--active"] : ""}`}
              >
                {t("search.buy")}
              </button>
              <button
                onClick={() => setActiveTab("rent")}
                className={`${styles.home__hero__search__tabs__btn} ${activeTab === "rent" ? styles["home__hero__search__tabs__btn--active"] : ""}`}
              >
                {t("search.rent")}
              </button>
              <button
                onClick={() => setActiveTab("offplan")}
                className={`${styles.home__hero__search__tabs__btn} ${activeTab === "offplan" ? styles["home__hero__search__tabs__btn--active"] : ""}`}
              >
                {t("search.offPlan")}
              </button>
            </div>
            <div className={styles.home__hero__search__form}>
              <div className={styles.home__hero__search__form__field}>
                <span className={styles.home__hero__search__form__field__label}>
                  {t("search.propertyType")}
                </span>
                <select
                  className={styles.home__hero__search__form__field__select}
                  defaultValue=""
                >
                  <option value="" disabled></option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
              <div className={styles.home__hero__search__form__divider} />
              <div className={styles.home__hero__search__form__field}>
                <span className={styles.home__hero__search__form__field__label}>
                  {t("search.area")}
                </span>
                <select
                  className={styles.home__hero__search__form__field__select}
                  defaultValue=""
                >
                  <option value="" disabled></option>
                  <option value="downtown">Downtown</option>
                  <option value="marina">Marina</option>
                  <option value="palm">Palm Jumeirah</option>
                  <option value="jbr">JBR</option>
                </select>
              </div>
              <div className={styles.home__hero__search__form__divider} />
              <div className={styles.home__hero__search__form__field}>
                <span className={styles.home__hero__search__form__field__label}>
                  {t("search.bedrooms")}
                </span>
                <select
                  className={styles.home__hero__search__form__field__select}
                  defaultValue=""
                >
                  <option value="" disabled></option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div className={styles.home__hero__search__form__divider} />
              <div className={styles.home__hero__search__form__field}>
                <span className={styles.home__hero__search__form__field__label}>
                  {t("search.priceRange")}
                </span>
                <select
                  className={styles.home__hero__search__form__field__select}
                  defaultValue=""
                >
                  <option value="" disabled></option>
                  <option value="0-1m">Up to 1M AED</option>
                  <option value="1m-3m">1M – 3M AED</option>
                  <option value="3m-5m">3M – 5M AED</option>
                  <option value="5m+">5M+ AED</option>
                </select>
              </div>
              <button className={styles.home__hero__search__form__submit}>
                <Search
                  className={styles.home__hero__search__form__submit__icon}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects properties={mockProperties} />
      <section className={styles.home__aboutPreview}>
        <h2 className={styles.home__aboutPreview__title}>
          {t("aboutUs.title")}
        </h2>
        <div className={styles.home__aboutPreview__content}>
          <div className={styles.home__aboutPreview__content__text}>
            <p>{t("aboutUs.description")}</p>
            <button className={styles.home__aboutPreview__content__text__btn}>
              {t("aboutUs.readMore")}
              <span
                className={styles.home__aboutPreview__content__text__btn__icon}
              ></span>
            </button>
          </div>
          <div className={styles.home__aboutPreview__content__images}>
            <div
              className={styles.home__aboutPreview__content__images__colLeft}
            >
              <div
                className={
                  styles.home__aboutPreview__content__images__colLeft__top
                }
              >
                <Image
                  src="/home/5cd750d84f3ca1b77634349e38aaaf96fc85faf6.png"
                  alt=""
                  fill
                  className={styles.home__aboutPreview__content__images__img}
                />
              </div>
              <div
                className={
                  styles.home__aboutPreview__content__images__colLeft__bottom
                }
              >
                <Image
                  src="/home/8250a94b8e40500f0a3d6192b07f885c00d91105.png"
                  alt=""
                  fill
                  className={styles.home__aboutPreview__content__images__img}
                />
              </div>
            </div>
            <div
              className={styles.home__aboutPreview__content__images__colRight}
            >
              <div
                className={
                  styles.home__aboutPreview__content__images__colRight__top
                }
              >
                <Image
                  src="/home/771efc53bb7f7d614acf874229d5b84a9d36d971.png"
                  alt=""
                  fill
                  className={styles.home__aboutPreview__content__images__img}
                />
              </div>
              <div
                className={
                  styles.home__aboutPreview__content__images__colRight__bottom
                }
              >
                <Image
                  src="/home/818eaec45d89151d290e9f324dd7c527681acf04.png"
                  alt=""
                  fill
                  className={styles.home__aboutPreview__content__images__img}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PartnersMarquee />
      <FeaturedProjects
        properties={secondaryMockProperties}
        title="Secondary properties"
        seeAllLink="/properties"
        seeAllText="See all units"
      />
      <MarketOverview />
      <FeaturedProjects
        properties={secondaryMockProperties}
        title="Last oLatest off-plan projects"
        seeAllLink="/off-plan"
        seeAllText="See all projects"
      />
      <Testimonials />
      <FeaturedProjects
        properties={secondaryMockProperties}
        title="News center"
        seeAllLink="/news"
        seeAllText="See all articles"
      />
    </div>
  );
}
