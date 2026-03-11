'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import SafeLink from '../../SafeLink/SafeLink';
import styles from './AboutPreview.module.scss';

export default function AboutPreview() {
    const t = useTranslations('HomePage');

    return (
        <section className={styles.about}>
            <h2 className={styles.about__title}>{t('aboutUs.title')}</h2>
            <div className={styles.about__content}>
                <div className={styles.about__content__text}>
                    <p>{t('aboutUs.description')}</p>
                    <button className={styles.about__content__text__btn}>
                        {t('aboutUs.readMore')}
                        <span className={styles.about__content__text__btn__icon}></span>
                    </button>
                </div>
                <div className={styles.about__content__images}>
                    <div className={styles.about__content__images__colLeft}>
                        <div className={styles.about__content__images__colLeft__top}>
                            <Image
                                src="/home/5cd750d84f3ca1b77634349e38aaaf96fc85faf6.png"
                                alt=""
                                fill
                                className={styles.about__content__images__img}
                            />
                        </div>
                        <div className={styles.about__content__images__colLeft__bottom}>
                            <Image
                                src="/home/8250a94b8e40500f0a3d6192b07f885c00d91105.png"
                                alt=""
                                fill
                                className={styles.about__content__images__img}
                            />
                        </div>
                    </div>
                    <div className={styles.about__content__images__colRight}>
                        <div className={styles.about__content__images__colRight__top}>
                            <Image
                                src="/home/771efc53bb7f7d614acf874229d5b84a9d36d971.png"
                                alt=""
                                fill
                                className={styles.about__content__images__img}
                            />
                        </div>
                        <div className={styles.about__content__images__colRight__bottom}>
                            <Image
                                src="/home/818eaec45d89151d290e9f324dd7c527681acf04.png"
                                alt=""
                                fill
                                className={styles.about__content__images__img}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
