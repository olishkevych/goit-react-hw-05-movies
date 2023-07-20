import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from 'services/toastify/toastConfig';
import useFetchReviews from 'hooks/useFetchReviews';

import 'react-toastify/dist/ReactToastify.css';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const fetchedReviews = useFetchReviews(movieId);
  const { reviews, error } = fetchedReviews;

  if (error) {
    toast.warning(`Something went wrong. ${error}`, toastConfig);
  }

  return (
    <ul className={css.ReviewList}>
      <ToastContainer />

      {reviews.length > 0 &&
        reviews.map(review => (
          <li className={css.Review} key={review.id}>
            <p className={css.Author}> Author: {review.author}</p>
            <p className={css.Text}>{review.content}</p>
          </li>
        ))}
      {reviews.length === 0 && (
        <p> className={css.CenterText}No reviews left yet</p>
      )}
    </ul>
  );
};

export default Reviews;
