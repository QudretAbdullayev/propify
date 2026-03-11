import Link from 'next/link';
import styles from './SectionHeader.module.scss';
import SafeLink from '@/components/SafeLink/SafeLink';

export default function SectionHeader({ title, linkText, linkHref }) {
    return (
        <div className={styles.header}>
            <h2 className={styles.header__title}>{title}</h2>
            {linkText && linkHref && (
                <SafeLink href={linkHref} className={styles.header__link}>
                    {linkText}
                    <span className={styles.header__link__line}></span>
                </SafeLink>
            )}
        </div>
    );
}
