import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import useFetchTrendingMovies from 'hooks/useFetchTrendingMovies';
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from 'services/toastify/toastConfig';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const state = useFetchTrendingMovies();
  const { trendingMovies, error } = state;

  if (error) {
    toast.warning(`Something went wrong. ${error}`, toastConfig);
  }

  return (
    <div>
      <ToastContainer />
      {trendingMovies.length > 0 ? (
        <MovieGallery movies={trendingMovies} />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Home;
