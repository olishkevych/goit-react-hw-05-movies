import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api/api';

const useFetchTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState(
    () => JSON.parse(sessionStorage.getItem('trendingMovies')) ?? []
  );
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (trendingMovies.length > 0) return;
    const handleFetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const fetchedMovies = await fetchTrendingMovies();
        setTrendingMovies(fetchedMovies);
        sessionStorage.setItem('trendingMovies', JSON.stringify(fetchedMovies));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    handleFetchTrendingMovies();
  }, [trendingMovies.length]);

  return { trendingMovies, error, isLoading };
};

export default useFetchTrendingMovies;
