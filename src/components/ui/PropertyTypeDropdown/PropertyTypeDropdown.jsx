'use client';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './PropertyTypeDropdown.module.scss';

const RESIDENTIAL = ['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Duplex', 'Plot', 'Land', 'House'];
const COMMERCIAL = ['Duplex', 'Plot', 'Land', 'House'];

export default function PropertyTypeDropdown({ label }) {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('residential');
    const [selected, setSelected] = useState([]);
    const [menuStyle, setMenuStyle] = useState({});
    const triggerRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        if (triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            setMenuStyle({
                position: 'fixed',
                top: rect.bottom + 8,
                left: rect.left,
                zIndex: 9999,
            });
        }
        const close = () => setOpen(false);
        window.addEventListener('scroll', close, true);
        window.addEventListener('resize', close);
        return () => {
            window.removeEventListener('scroll', close, true);
            window.removeEventListener('resize', close);
        };
    }, [open]);

    // Close on outside click
    useEffect(() => {
        function handleMouseDown(e) {
            if (
                triggerRef.current && !triggerRef.current.contains(e.target) &&
                menuRef.current && !menuRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleMouseDown);
        return () => document.removeEventListener('mousedown', handleMouseDown);
    }, []);

    function toggle(value) {
        setSelected((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    }

    const items = activeTab === 'residential' ? RESIDENTIAL : COMMERCIAL;
    const leftCol = items.slice(0, 2);
    const rightCol = items.slice(2);
    const displayLabel = selected.length > 0 ? selected.join(', ') : label;

    return (
        <div className={styles.wrapper}>
            <button
                ref={triggerRef}
                type="button"
                className={styles.trigger}
                onClick={() => setOpen((o) => !o)}
            >
                <span className={`${styles.trigger__label} ${selected.length > 0 ? styles['trigger__label--active'] : ''}`}>
                    {displayLabel}
                </span>
            </button>

            {open && createPortal(
                <div ref={menuRef} className={styles.menu} style={menuStyle}>
                    <div className={styles.menu__tabs}>
                        <button
                            type="button"
                            className={`${styles.menu__tabs__btn} ${activeTab === 'residential' ? styles['menu__tabs__btn--active'] : ''}`}
                            onClick={() => setActiveTab('residential')}
                        >
                            Residential
                        </button>
                        <button
                            type="button"
                            className={`${styles.menu__tabs__btn} ${activeTab === 'commercial' ? styles['menu__tabs__btn--active'] : ''}`}
                            onClick={() => setActiveTab('commercial')}
                        >
                            Commercial
                        </button>
                    </div>

                    <div className={styles.menu__grid}>
                        <div className={styles.menu__grid__col}>
                            {leftCol.map((item) => (
                                <label key={item} className={styles.menu__grid__item}>
                                    <input
                                        type="checkbox"
                                        className={styles.menu__grid__item__checkbox}
                                        checked={selected.includes(item)}
                                        onChange={() => toggle(item)}
                                    />
                                    <span className={styles.menu__grid__item__label}>{item}</span>
                                </label>
                            ))}
                        </div>
                        <div className={styles.menu__grid__col}>
                            {rightCol.map((item) => (
                                <label key={item} className={styles.menu__grid__item}>
                                    <input
                                        type="checkbox"
                                        className={styles.menu__grid__item__checkbox}
                                        checked={selected.includes(item)}
                                        onChange={() => toggle(item)}
                                    />
                                    <span className={styles.menu__grid__item__label}>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
