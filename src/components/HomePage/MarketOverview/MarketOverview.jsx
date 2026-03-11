import { useTranslations } from 'next-intl';
import styles from './MarketOverview.module.scss';
import Home from '@/assets/icons/Home';
import ChevronDown from '@/assets/icons/ChevronDown';
import ChevronUp from '@/assets/icons/ChevronUp';

const propertyCards = [
    { count: '12,804', mom: '-6.1%', yoy: '+22.8%', salesValue: 'AED 26.4B' },
    { count: '12,804', mom: '-6.1%', yoy: '+22.8%', salesValue: 'AED 26.4B' },
    { count: '12,804', mom: '-6.1%', yoy: '+22.8%', salesValue: 'AED 26.4B' },
    { count: '12,804', mom: '-6.1%', yoy: '+22.8%', salesValue: 'AED 26.4B' },
];

export default function MarketOverview() {
    const t = useTranslations('HomePage.marketOverview');

    return (
        <section className={styles.market}>
            <div className={styles.market__container}>

                <div className={styles.market__header}>
                    <p className={styles.market__header__subtitle}>{t('title')}</p>
                    <h2 className={styles.market__header__date}>{t('date')}</h2>
                </div>

                <div className={styles.market__goldBorder}>
                    <div className={styles.market__goldBorder__glow1} />
                    <div className={styles.market__goldBorder__glow2} />
                    <div className={styles.market__box}>
                        <div className={styles.market__box__item}>
                            <span className={styles.market__box__item__label}>{t('salesVolume')}</span>
                            <div className={styles.market__box__item__val}>
                                <span className={styles.market__box__item__val__num}>17,468</span>
                            </div>
                            <div className={styles.market__box__item__badges}>
                                <div className={`${styles.market__box__item__badges__badge} ${styles['market__box__item__badges__badge--down']}`}>
                                    <ChevronDown /><span>-6.1% {t('mom')}</span>
                                </div>
                                <div className={`${styles.market__box__item__badges__badge} ${styles['market__box__item__badges__badge--up']}`}>
                                    <ChevronUp /><span>+22.8% {t('yoy')}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.market__box__divider} />

                        <div className={styles.market__box__item}>
                            <span className={styles.market__box__item__label}>{t('salesVolume')}</span>
                            <div className={styles.market__box__item__val}>
                                <span className={styles.market__box__item__val__num}>17,468</span>
                                <span className={styles.market__box__item__val__curr}>AED</span>
                            </div>
                            <div className={styles.market__box__item__badges}>
                                <div className={`${styles.market__box__item__badges__badge} ${styles['market__box__item__badges__badge--down']}`}>
                                    <ChevronDown /><span>-6.1% {t('mom')}</span>
                                </div>
                                <div className={`${styles.market__box__item__badges__badge} ${styles['market__box__item__badges__badge--up']}`}>
                                    <ChevronUp /><span>+22.8% {t('yoy')}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.market__box__divider} />

                        <div className={styles.market__box__item}>
                            <span className={styles.market__box__item__label}>{t('salesVolume')}</span>
                            <div className={styles.market__box__item__val}>
                                <span className={styles.market__box__item__val__num}>17,468</span>
                            </div>
                            <div className={styles.market__box__item__badges}>
                                <div className={`${styles.market__box__item__badges__badge} ${styles['market__box__item__badges__badge--down']}`}>
                                    <ChevronDown /><span>-6.1% {t('mom')}</span>
                                </div>
                                <div className={`${styles.market__box__item__badges__badge} ${styles['market__box__item__badges__badge--up']}`}>
                                    <ChevronUp /><span>+22.8% {t('yoy')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.market__cards}>
                    {propertyCards.map((card, i) => (
                        <div key={i} className={styles.market__cards__card}>
                            <div className={styles.market__cards__card__top}>
                                <div className={styles.market__cards__card__icon}>
                                    <Home />
                                </div>
                                <div className={styles.market__cards__card__info}>
                                    <span className={styles.market__cards__card__info__count}>{card.count}</span>
                                    <span className={styles.market__cards__card__info__type}>{t('apartments')}</span>
                                </div>
                            </div>

                            <div className={styles.market__cards__card__stats}>
                                <div className={`${styles.market__cards__card__stats__item} ${styles['market__cards__card__stats__item--down']}`}>
                                    <ChevronDown /><span>{card.mom} {t('mom')}</span>
                                </div>
                                <div className={`${styles.market__cards__card__stats__item} ${styles['market__cards__card__stats__item--up']}`}>
                                    <ChevronUp /><span>{card.yoy} {t('yoy')}</span>
                                </div>
                            </div>

                            <div className={styles.market__cards__card__divider} />

                            <div className={styles.market__cards__card__sales}>
                                <span className={styles.market__cards__card__sales__label}>{t('salesValue')}</span>
                                <span className={styles.market__cards__card__sales__val}>{card.salesValue}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
