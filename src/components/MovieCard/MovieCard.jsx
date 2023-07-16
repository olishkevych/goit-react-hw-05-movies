import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import placeholder from '../../images/poster-placeholder.jpg';
import css from './MovieCard.module.css';

export const MovieCard = ({ title, poster, movieId, year }) => {
  const location = useLocation();

  return (
    <Link
      to={`/movies/${movieId}`}
      state={{ from: location }}
      className={css.GalleryLink}
    >
      <img
        className={css.GalleryImage}
        alt={title}
        src={poster ? `https://image.tmdb.org/t/p/w200/${poster}` : placeholder}
        width="200"
      />
      <div className={css.GalleryText}>
        {title} ({year})
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  movieId: PropTypes.number.isRequired,
  year: PropTypes.string,
};
