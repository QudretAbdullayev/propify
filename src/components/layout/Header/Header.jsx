'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ArrowDown from '../../../assets/icons/ArrowDown';
import Menu from '../../../assets/icons/Menu';
import styles from './Header.module.scss';

export default function Header() {
    const t = useTranslations('HomePage');
    // const pathname = usePathname();

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__container__logo}>
                    <Image src="/Propify.svg" alt="Propify" width={86} height={86} className={styles.header__container__logo__img} />
                </div>
                <div className={styles.header__container__actions}>
                    <div className={styles.header__container__actions__lang}>
                        EN <ArrowDown />
                    </div>
                    <button className={styles.header__container__actions__menu}>
                        <Menu className={styles.header__container__actions__menu__icon} />
                    </button>
                </div>
            </div>
        </header>
    );
}
