import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCategory } from '../actions/index';

const mapStatesToProps = state => ({
  books: state.books,
  category: state.category,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeCategory(category)),
});

const Filter = props => {
  const { books, changeFilter, category } = props;
  let categories = books.map(book => book.category);
  categories.unshift('All');
  categories.unshift(category);
  categories = [...new Set(categories)];

  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      {
        categories.map(category => (
          <option key={Math.random()} value={category}>
            {category}
          </option>
        ))
      }
    </select>
  );
};

Filter.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps,
)(Filter);
