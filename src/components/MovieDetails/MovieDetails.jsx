import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MovieDetailsEl } from '../MovieDetailsEl/MovieDetailsEl';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import useFetchMovieDetails from 'hooks/useFetchMovieDetails';
import { toastConfig } from 'services/toastify/toastConfig';
import 'react-toastify/dist/ReactToastify.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const fetchedData = useFetchMovieDetails(movieId);
  const { details, error } = fetchedData;

  if (error) {
    toast.warning(`Something went wrong. ${error}`, toastConfig);
  }

  return (
    <div>
      {details && <MovieDetailsEl movie={details} />}
      <Link className={css.Link} to={`cast`}>
        Cast
      </Link>
      <Link className={css.Link} to={`reviews`}>
        Reviews
      </Link>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
