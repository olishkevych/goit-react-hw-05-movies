import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api/api';

const useFetchTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState(
    () => JSON.parse(localStorage.getItem('trendingMovies')) ?? []
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleFetchTrendingMovies = async () => {
      try {
        const fetchedMovies = await fetchTrendingMovies();
        setTrendingMovies(fetchedMovies);
      } catch (err) {
        setError(err);
      }
    };
    handleFetchTrendingMovies();
  }, []);

  localStorage.setItem('trendingMovies', JSON.stringify(trendingMovies));

  return { trendingMovies, error };
};

export default useFetchTrendingMovies;
