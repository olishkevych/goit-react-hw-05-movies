import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from 'services/toastify/toastConfig';
import { useParams } from 'react-router-dom';
import placeholder from '../../images/profile.jpg';
import useFetchCast from 'hooks/useFetchCast';

import css from './Cast.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Cast = () => {
  const { movieId } = useParams();
  const state = useFetchCast(movieId);
  const { cast, error } = state;

  if (error) {
    toast.warning(`Something went wrong. ${error}`, toastConfig);
  }

  return (
    <ul className={css.CastGallery}>
      <ToastContainer />

      {cast.length > 0 &&
        cast.map(actor => (
          <li key={actor.id} className={css.GalleryItem}>
            <img
              alt={actor.name}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : placeholder
              }
              width="200"
              height="300"
            />
            <div className={css.GalleryText}>
              <p className={css.textBold}>{actor.name}</p>
              <p className={css.text}>Character: {actor.character}</p>
            </div>
          </li>
        ))}

      {cast.length === 0 && <p>There is no information on the cast</p>}
    </ul>
  );
};

export default Cast;
