import { MovieCard } from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import css from './MovieGallery.module.css';
import 'react-toastify/dist/ReactToastify.css';

export const MovieGallery = ({ movies }) => {
  return (
    <ul className={css.MovieGallery}>
      {movies.map(movie => (
        <li key={movie.id} className={css.GalleryItem}>
          <MovieCard
            title={movie.title}
            poster={movie.poster_path}
            movieId={movie.id}
            year={movie.release_date.substring(0, 4)}
          />
        </li>
      ))}
    </ul>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
