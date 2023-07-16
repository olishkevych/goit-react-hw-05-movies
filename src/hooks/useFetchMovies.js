import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/api/api';

const useFetchMovies = query => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleFetchMovies = async () => {
      try {
        const fetchedMovies = await fetchMovies(query);
        setMovies(fetchedMovies);
      } catch (err) {
        setError(err);
      }
    };
    handleFetchMovies();
  }, [query]);

  return { movies, error };
};

export default useFetchMovies;
