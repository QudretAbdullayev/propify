"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Testimonials.module.scss";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import Left from "@/assets/icons/Left";
import Right from "@/assets/icons/Right";
import { useRef } from "react";

export default function Testimonials() {
  const t = useTranslations("HomePage");
  const swiperRef = useRef(null);

  const testimonials = [
    {
      text: "Using this app feels effortless. The interface is clean, intuitive, and actually makes me want to stay consistent. It's one of the few products that genuinely improves my day-to-day routine.",
      author: "Aisha Kareem",
      title: "Property Investor",
      image: "/home/testimonials/testimonials-1.png",
    },
    {
      text: "I loved how simple everything was from the start. The onboarding made sense, the features were easy to explore, and the design kept me motivated to keep coming back.",
      author: "Daniel Moretti",
      title: "Luxury Home Buyer",
      image: "/home/testimonials/testimonials-3.png",
    },
    {
      text: "This product strikes the perfect balance between aesthetics and functionality. It's fast, organized, and makes complex tasks feel manageable. Easily one of the best user experiences I've had.",
      author: "Omar Haddad",
      title: "Commercial Property Owner",
      image: "/home/testimonials/testimonials-2.png",
    },
    {
      text: "From day one, the platform felt tailor-made for my needs. The search filters are incredibly detailed, and the listings are always up to date. It's made my property hunt genuinely enjoyable.",
      author: "Leila Nasser",
      title: "Real Estate Consultant",
      image: "/home/testimonials/testimonials-4.png",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__inner}>
        <div className={styles.testimonials__top}>
          <SectionHeader title={t("testimonials")} />
        </div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView="auto"
          spaceBetween={32}
          className={styles.testimonials__swiper}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className={styles.testimonials__card}>
              <p className={styles.testimonials__card__text}>{item.text}</p>
              <div className={styles.testimonials__card__author}>
                <Image
                  src={item.image}
                  alt={item.author}
                  width={50}
                  height={50}
                  className={styles.testimonials__card__author__img}
                />
                <div className={styles.testimonials__card__author__info}>
                  <span className={styles.testimonials__card__author__name}>
                    {item.author}
                  </span>
                  <span className={styles.testimonials__card__author__role}>
                    {item.title}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.testimonials__nav}>
        <button
          className={styles.testimonials__nav__btn}
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
        >
          <Left />
        </button>
        <button
          className={styles.testimonials__nav__btn}
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
        >
          <Right />
        </button>
      </div>
    </section>
  );
}
