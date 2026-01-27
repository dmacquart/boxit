import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.brand}>
            <img
              src="/images/boxit-logo.png"
              alt="Boxit"
              className={styles.logo}
            />
          </a>
        </Link>
      </div>

      <nav className={styles.nav}>
        {/* existing nav items - adjust as needed */}
        <a href="/features" className={styles.navItem}>Features</a>
        <a href="/pricing" className={styles.navItem}>Pricing</a>
      </nav>
    </header>
  );
}
