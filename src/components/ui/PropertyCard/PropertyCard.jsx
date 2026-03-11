import Image from "next/image";
import Link from "next/link";
import styles from "./PropertyCard.module.scss";
import SafeLink from "@/components/SafeLink/SafeLink";
import ChevronRight from "@/assets/icons/ChevronRight";

export default function PropertyCard({ image, date, title, price, isAED, ctaText = "See details", ctaHref }) {
  const href = ctaHref ?? `/property/${title.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className={styles.card}>
      <div className={styles.card__imageBox}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.card__imageBox__img}
        />
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__content__header}>
          <span className={styles.card__content__header__date}>{date}</span>
          <h3 className={styles.card__content__header__title}>{title}</h3>
          {price && (
            <div className={styles.card__content__header__priceBlock}>
              <span className={styles.card__content__header__priceBlock__label}>
                Prices from
              </span>
              <span
                className={styles.card__content__header__priceBlock__amount}
              >
                {isAED ? `AED ${price}` : `$ ${price}`}
              </span>
            </div>
          )}
        </div>
        <div className={styles.card__content__footer}>
          <SafeLink href={href} className={styles.card__content__footer__btn}>
            {ctaText}
            <ChevronRight className={styles.card__content__footer__btn__icon} />
          </SafeLink>
        </div>
      </div>
    </div>
  );
}
