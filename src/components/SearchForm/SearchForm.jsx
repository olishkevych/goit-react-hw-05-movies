import css from './SearchForm.module.css';
import PropTypes from 'prop-types';

export const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={css.SearchForm}>
      <input
        type="text"
        name="searchText"
        className={css.SearchInput}
        placeholder="Enter search text"
        autoFocus
      />
      <button type="submit" className={css.SearchBtn}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
