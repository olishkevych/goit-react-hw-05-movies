import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from 'services/toastify/toastConfig';
import 'react-toastify/dist/ReactToastify.css';

import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { SearchForm } from 'components/SearchForm/SearchForm';
import useFetchMovies from 'hooks/useFetchMovies';

import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const fetchedMovies = useFetchMovies(query);
  const { movies, error } = fetchedMovies;

  const handleSumbit = event => {
    event.preventDefault();
    const searchQuery = event.target.children.searchText.value
      .toLowerCase()
      .trim();
    if (searchQuery) {
      event.target.reset();
      setSearchParams({
        query: searchQuery,
      });
    } else {
      toast.error('Enter search text', toastConfig);
    }
  };

  if (error) {
    toast.warning({ error });
  }

  return (
    <div>
      <ToastContainer />
      <SearchForm handleSubmit={handleSumbit} />
      {movies.length > 0 && <MovieGallery movies={movies} />}
      {movies.length === 0 && query && (
        <div className={css.Warning}>Ooops! No movies found!</div>
      )}
    </div>
  );
};
export default Movies;
