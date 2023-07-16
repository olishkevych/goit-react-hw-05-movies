import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';

import css from './App.module.css';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.App}>
      <header className={css.Header}>
        <nav className={css.Navigation}>
          <NavLink to="/" className={css.NavItem}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.NavItem}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
