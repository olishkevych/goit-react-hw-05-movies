import { useEffect, useState } from 'react';
import { fetchReviews } from 'services/api/api';

const useFetchReviews = movieId => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleFetchReviews = async () => {
      try {
        const fetchedReviews = await fetchReviews(movieId);
        setReviews(fetchedReviews.results);
      } catch (err) {
        setError(err);
      }
    };
    handleFetchReviews();
  }, [movieId]);

  return { reviews, error };
};

export default useFetchReviews;
