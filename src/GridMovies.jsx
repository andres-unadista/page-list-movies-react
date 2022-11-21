import { MovieCard } from './MovieCard';
import movies from './movies.json';
import styles from './GridMovies.module.css'

export function GridMovies() {
  console.trace(movies);
  return (
    <ul className={styles.gridMovies}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
}
