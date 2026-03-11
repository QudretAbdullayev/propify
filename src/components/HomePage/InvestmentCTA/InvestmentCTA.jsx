'use client';
import Image from 'next/image';
import SafeLink from '../../SafeLink/SafeLink';
import Triangle from '../../../assets/icons/Triangle';
import styles from './InvestmentCTA.module.scss';

export default function InvestmentCTA() {
    return (
        <section className={styles.cta}>
            {/* Left card — Investment quiz */}
            <div className={styles.cta__quiz}>
                <Image
                    src="/home/af7f1387ca38ce03f0ac989b1cbd3b799b52b6b8.png"
                    alt=""
                    fill
                    className={styles.cta__quiz__bg}
                />
                <div className={styles.cta__quiz__overlay} />
                <div className={styles.cta__inner}>
                    <div className={styles.cta__top}>
                        <div className={styles.cta__text}>
                            <h2 className={styles.cta__title}>Investment quiz</h2>
                            <p className={styles.cta__subtitle}>Get tailored property recommendations.</p>
                        </div>
                        <Triangle className={styles.cta__triangle} />
                    </div>
                    <SafeLink href="/quiz" className={styles.cta__btn}>
                        Take the quiz
                        <span className={styles.cta__btn__chevron}>›</span>
                    </SafeLink>
                </div>
            </div>

            {/* Right card — Purchase enquiry */}
            <div className={styles.cta__enquiry}>
                <div className={styles.cta__inner}>
                    <div className={styles.cta__top}>
                        <div className={styles.cta__text}>
                            <h2 className={styles.cta__title}>Purchase enquiry</h2>
                            <p className={styles.cta__subtitle}>Start your journey to owning your home.</p>
                        </div>
                        <Triangle className={styles.cta__triangle} />
                    </div>
                    <SafeLink href="/contact" className={styles.cta__btn}>
                        Let&apos;s chat
                        <span className={styles.cta__btn__chevron}>›</span>
                    </SafeLink>
                </div>
            </div>
        </section>
    );
}
