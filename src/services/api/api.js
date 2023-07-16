import axios from 'axios';

export const API_KEY = '2de935b6e20dfb86bb8dee5d277c7329';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const params = {
  api_key: API_KEY,
};

export async function fetchMovies(query) {
  const params = {
    api_key: API_KEY,
    query: query,
  };

  try {
    const response = await axios.get('search/movie?', { params });
    return response.data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get('trending/movie/week', { params });
    return response.data.results;
  } catch (error) {
    throw error;
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCast(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/credits`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchReviews(movieId) {
  try {
    const response = await axios.get(`movie/${movieId}/reviews`, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}
