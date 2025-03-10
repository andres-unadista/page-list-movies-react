import { GridMovies } from './GridMovies';
import React from 'react';
import Footer from './Footer';

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Movies</h1>
      </header>
      <main>
        <GridMovies />
      </main>
      <Footer />
    </div>
  );
}
