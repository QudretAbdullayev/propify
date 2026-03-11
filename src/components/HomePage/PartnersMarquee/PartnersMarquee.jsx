import Image from "next/image";
import styles from "./PartnersMarquee.module.scss";

const logos = [
  { src: "/partners/Turner.png", alt: "Turner" },
  { src: "/partners/Emaar.png", alt: "Emaar" },
  { src: "/partners/Damac.png", alt: "Damac" },
  { src: "/partners/Kier.png", alt: "Kier" },
];

export default function PartnersMarquee() {
  return (
    <section className={styles.marquee}>
      <div className={styles.marquee__label}>
        <div className={styles.marquee__label__inner}>
          <span>
            Powered by
            <br />
            50+ developers
          </span>
        </div>
      </div>

      <div className={styles.marquee__track}>
        <div className={styles.marquee__strip}>
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className={styles.marquee__strip__logo}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={56}
                className={styles.marquee__strip__logo__img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
