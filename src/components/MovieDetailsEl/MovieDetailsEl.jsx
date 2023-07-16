import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import placeholder from '../../images/poster-placeholder.jpg';
import css from './MovieDetailsEl.module.css';

export const MovieDetailsEl = ({ movie }) => {
  const { title, poster_path, genres, release_date, vote_average, overview } =
    movie;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const year = release_date.substring(0, 4);

  return (
    <div>
      <Link to={backLinkHref.current} className={css.backLink}>
        {' '}
        &#8592; Back to search results
      </Link>
      {movie && (
        <div className={css.MovieDataContainer}>
          <div>
            {' '}
            <img
              alt={title}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                  : placeholder
              }
              width="200"
            />{' '}
          </div>
          <div>
            <h1 className={css.MovieTitle}> {title}</h1>
            <p className={css.heading}>
              Release: <span className={css.info}>{year}</span>
            </p>
            <p className={css.heading}>
              Rating:{' '}
              <span className={css.info}>{vote_average.toFixed(1)}</span>
            </p>

            {overview && (
              <>
                <h2 className={css.subHeader}> Overview</h2>
                <p> {overview}</p>
              </>
            )}

            {genres && (
              <>
                <h2 className={css.subHeader}> Genres</h2>{' '}
                <p> {genres.map(genre => genre.name).join(', ')}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

MovieDetailsEl.propTypes = {
  movie: PropTypes.object.isRequired,
};
