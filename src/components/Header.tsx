import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <a className={styles.brand} aria-label="Go to Boxit homepage">
            <Image
              src="/images/boxit-logo.png"
              alt="Boxit"
              width={180}
              height={40}
              priority
              className={styles.logo}
            />
          </a>
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/features"><a className={styles.navItem}>Features</a></Link>
        <Link href="/pricing"><a className={styles.navItem}>Pricing</a></Link>
      </nav>
    </header>
  );
}
