import { useEffect, useState } from 'react';
import { fetchCast } from 'services/api/api';

const useFetchCast = movieId => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleFetchCast = async () => {
      try {
        const fetchedCast = await fetchCast(movieId);
        setCast(fetchedCast.cast);
      } catch (err) {
        setError(err);
      }
    };
    handleFetchCast();
  }, [movieId]);

  return { cast, error };
};

export default useFetchCast;
