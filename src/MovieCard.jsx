import styles from './MovieCard.module.css';

export function MovieCard({ movie }) {
  const url = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;

  return (
    <li className={styles.cardModule}>
      <img width={230} height={415} className={styles.imageCard} src={url} alt={movie.title} />
      <div>{movie.title}</div>
    </li>
  );
}
