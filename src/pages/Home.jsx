import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import useFetchTrendingMovies from 'hooks/useFetchTrendingMovies';
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from 'services/toastify/toastConfig';

import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const state = useFetchTrendingMovies();
  const { trendingMovies, error, isLoading } = state;

  if (error) {
    toast.warning(`Something went wrong. ${error}`, toastConfig);
  }

  return (
    <div>
      {isLoading && <Loader />}
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
