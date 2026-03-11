'use client';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './FeaturedProjects.module.scss';
import PropertyCard from '../../ui/PropertyCard/PropertyCard';
import SafeLink from '../../SafeLink/SafeLink';
import Left from '../../../assets/icons/Left';
import Right from '../../../assets/icons/Right';

export default function FeaturedProjects({ properties }) {
    const t = useTranslations('HomePage');
    const swiperRef = useRef(null);

    return (
        <section className={styles.featured}>
            <div className={styles.featured__main}>
                <div className={styles.featured__header}>
                    <h2 className={styles.featured__header__title}>{t('featuredProjects')}</h2>
                    <SafeLink href="/properties" className={styles.featured__header__link}>
                        {t('seeAllProperties')}
                        <span />
                    </SafeLink>
                </div>
                <div className={styles.featured__slider}>
                    <Swiper
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        spaceBetween={32}
                        slidesPerView="auto"
                    >
                        {properties.map((prop) => (
                            <SwiperSlide key={prop.id} className={styles.featured__slider__slide}>
                                <PropertyCard
                                    image={prop.image}
                                    date={prop.date}
                                    title={prop.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className={styles.featured__nav}>
                <button
                    className={styles.featured__nav__btn}
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous"
                >
                    <Left />
                </button>
                <button
                    className={styles.featured__nav__btn}
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next"
                >
                    <Right />
                </button>
            </div>
        </section>
    );
}
