import Image from 'next/image';
import Link from 'next/link';
import styles from './PropertyCard.module.scss';
import SafeLink from '@/components/SafeLink/SafeLink';

export default function PropertyCard({ image, date, title, price, isAED }) {
    return (
        <div className={styles.card}>
            <div className={styles.card__imageBox}>
                <Image src={image} alt={title} fill className={styles.card__imageBox__img} />
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__content__header}>
                    <span className={styles.card__content__header__date}>{date}</span>
                    <h3 className={styles.card__content__header__title}>{title}</h3>
                </div>
                <div className={styles.card__content__footer}>
                    {price && (
                        <div className={styles.card__content__footer__priceBlock}>
                            <span className={styles.card__content__footer__priceBlock__label}>Prices from</span>
                            <span className={styles.card__content__footer__priceBlock__amount}>
                                {isAED ? `AED ${price}` : `$ ${price}`}
                            </span>
                        </div>
                    )}
                    <SafeLink href={`/property/${title.replace(/\s+/g, '-').toLowerCase()}`} className={styles.card__content__footer__btn}>
                        See details
                        <span className={styles.card__content__footer__btn__icon}></span>
                    </SafeLink>
                </div>
            </div>
        </div>
    );
}
