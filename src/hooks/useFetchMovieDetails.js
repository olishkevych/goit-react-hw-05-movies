import { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'services/api/api';

const useFetchMovieDetails = movieId => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleFetchDetails = async () => {
      try {
        const fetchedDetails = await fetchMovieDetails(movieId);
        setDetails(fetchedDetails);
      } catch (err) {
        setError(err);
      }
    };
    handleFetchDetails();
  }, [movieId]);

  return { details, error };
};

export default useFetchMovieDetails;
