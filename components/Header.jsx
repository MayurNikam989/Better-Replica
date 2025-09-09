'use client';
import Link from 'next/link';
import styles from '@styles/header.module.scss';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const nav = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
    { href: '/start', label: 'Start' },
  ];
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <Link href="/" className={styles.brand} aria-label="Site home">
            <span className={styles.dot} /> Better Replica
          </Link>
          <nav className={styles.nav}>
            {nav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? styles.active : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.actions}>
            <Link href="/start" className="btnPrimary">Get started</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
