'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import VideoStatic from '../../VideoStatic/VideoStatic';
import Search from '../../../assets/icons/Search';
import PropertyTypeDropdown from '../../ui/PropertyTypeDropdown/PropertyTypeDropdown';
import styles from './Hero.module.scss';

export default function Hero() {
    const t = useTranslations('HomePage');
    const [activeTab, setActiveTab] = useState('rent');

    return (
        <section className={styles.hero}>
            <div className={styles.hero__bg}>
                <VideoStatic src="/home/Dubai Skyline, from Day to Night _ Dubai, UAE - Copyright Free Video - No Copyright (1080p, h264).mp4" />
                <div className={styles.hero__overlay} />
            </div>
            <div className={`g-container ${styles.hero__container}`}>
                <div className={styles.hero__content}>
                    <h1 className={styles.hero__content__title}>{t('title')}</h1>
                    <p className={styles.hero__content__subtitle}>{t('subtitle')}</p>
                </div>

                <div className={styles.hero__search}>
                    <div className={styles.hero__search__tabs}>
                        <button
                            onClick={() => setActiveTab('buy')}
                            className={`${styles.hero__search__tabs__btn} ${activeTab === 'buy' ? styles['hero__search__tabs__btn--active'] : ''}`}
                        >
                            {t('search.buy')}
                        </button>
                        <button
                            onClick={() => setActiveTab('rent')}
                            className={`${styles.hero__search__tabs__btn} ${activeTab === 'rent' ? styles['hero__search__tabs__btn--active'] : ''}`}
                        >
                            {t('search.rent')}
                        </button>
                        <button
                            onClick={() => setActiveTab('offplan')}
                            className={`${styles.hero__search__tabs__btn} ${activeTab === 'offplan' ? styles['hero__search__tabs__btn--active'] : ''}`}
                        >
                            {t('search.offPlan')}
                        </button>
                    </div>
                    <div className={styles.hero__search__form}>
                        <PropertyTypeDropdown label={t('search.propertyType')} />
                        <div className={styles.hero__search__form__divider} />
                        <div className={styles.hero__search__form__field}>
                            <span className={styles.hero__search__form__field__label}>
                                {t('search.area')}
                            </span>
                            <select className={styles.hero__search__form__field__select} defaultValue="">
                                <option value="" disabled></option>
                                <option value="downtown">Downtown</option>
                                <option value="marina">Marina</option>
                                <option value="palm">Palm Jumeirah</option>
                                <option value="jbr">JBR</option>
                            </select>
                        </div>
                        <div className={styles.hero__search__form__divider} />
                        <div className={styles.hero__search__form__field}>
                            <span className={styles.hero__search__form__field__label}>
                                {t('search.bedrooms')}
                            </span>
                            <select className={styles.hero__search__form__field__select} defaultValue="">
                                <option value="" disabled></option>
                                <option value="1">1+</option>
                                <option value="2">2+</option>
                                <option value="3">3+</option>
                                <option value="4">4+</option>
                                <option value="5">5+</option>
                            </select>
                        </div>
                        <div className={styles.hero__search__form__divider} />
                        <div className={styles.hero__search__form__field}>
                            <span className={styles.hero__search__form__field__label}>
                                {t('search.priceRange')}
                            </span>
                            <select className={styles.hero__search__form__field__select} defaultValue="">
                                <option value="" disabled></option>
                                <option value="0-1m">Up to 1M AED</option>
                                <option value="1m-3m">1M – 3M AED</option>
                                <option value="3m-5m">3M – 5M AED</option>
                                <option value="5m+">5M+ AED</option>
                            </select>
                        </div>
                        <button className={styles.hero__search__form__submit}>
                            <Search className={styles.hero__search__form__submit__icon} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
