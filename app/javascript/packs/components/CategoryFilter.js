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
  const { books } = props;
  let categories = books.map(book => book.category);
  categories = ['All', ...new Set(categories)];

  return (
    <select>
      {
        categories.map(category => {
          return (
            <option key={Math.random()} value={category}>{category}</option>
          );
        })
      }
    </select>
  );
};

Filter.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps,
)(Filter);
