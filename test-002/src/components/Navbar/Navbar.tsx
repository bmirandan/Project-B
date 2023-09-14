'use client';

import styles from './Navbar.module.css';
import Image from 'next/image';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="flex items-center">
        <Image
          width={60}
          height={60}
          src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
          alt="Ditto Image Pokemon"
        />
        <h1 className={styles.h1}>P</h1>
        <h3>okemon</h3>
      </div>
      <div className={styles.favorites}>
        <h3>Favoritos</h3>
      </div>
    </div>
  );
}
