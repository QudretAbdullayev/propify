import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Our Partners', href: '/partners' },
    { label: 'Partnership', href: '/partnership' },
    { label: 'Locations', href: '/locations' },
    { label: 'Terms & Privacy', href: '/terms' },
];

const exploreLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'News & Media', href: '/news' },
];

const socials = [
    { icon: '/socials/mdi_whatsapp.svg', href: '#', label: 'WhatsApp' },
    { icon: '/socials/mdi_instagram.svg', href: '#', label: 'Instagram' },
    { icon: '/socials/mdi_facebook.svg', href: '#', label: 'Facebook' },
    { icon: '/socials/mdi_linkedin.svg', href: '#', label: 'LinkedIn' },
    { icon: '/socials/ri_twitter-x-line.svg', href: '#', label: 'X' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__card}>
                <div className={styles.footer__body}>
                    <div className={styles.footer__brand}>
                        <h2 className={styles.footer__brand__title}>
                            Live Where Luxury Meets Possibility
                        </h2>
                        <Image
                            src="/Propify.png"
                            alt="Propify"
                            width={86}
                            height={86}
                            className={styles.footer__brand__logo}
                        />
                    </div>

                    <div className={styles.footer__vdivider} />

                    <div className={styles.footer__right}>
                        <div className={styles.footer__nav}>
                            <div className={styles.footer__nav__col}>
                                <h3 className={styles.footer__nav__col__title}>Company</h3>
                                <ul className={styles.footer__nav__col__list}>
                                    {companyLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.footer__nav__col}>
                                <h3 className={styles.footer__nav__col__title}>Explore</h3>
                                <ul className={styles.footer__nav__col__list}>
                                    {exploreLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.footer__hdivider} />

                        <div className={styles.footer__contact}>
                            <h3 className={styles.footer__contact__title}>Contact Us</h3>
                            <div className={styles.footer__contact__list}>
                                <span>+971 50 342 5284</span>
                                <span>info@propify-realestate.com</span>
                                <span>70 Lafayette Street Lake Charles, LA 70605</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footer__hdivider} />

                <div className={styles.footer__bottom}>
                    <span className={styles.footer__bottom__copy}>© 2025 Propify, Inc.</span>
                    <div className={styles.footer__bottom__wemark}>
                        <span>Made by</span>
                        <Image src="/Wemark.svg" alt="Wemark" width={68} height={10} />
                    </div>
                    <div className={styles.footer__bottom__socials}>
                        {socials.map((s) => (
                            <Link key={s.label} href={s.href} aria-label={s.label}>
                                <Image src={s.icon} alt={s.label} width={36} height={36} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
