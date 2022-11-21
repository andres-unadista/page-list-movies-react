import { GridMovies } from './GridMovies';

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
    </div>
  );
}
