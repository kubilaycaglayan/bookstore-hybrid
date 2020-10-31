import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeWithAPI } from '../actions/index';

const mapStateToProps = state => ({
  books: state.books,
  category: state.category,
});

const mapDispatchToProps = dispatch => ({
  removeHandler: book => dispatch(removeWithAPI(book)),
});

const BooksList = props => {
  const { books, category, removeHandler } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>BOOK ID</th>
          <th>TITLE</th>
          <th>CATEGORY</th>
          <th>REMOVE?</th>
        </tr>
      </thead>
      <tbody>
        {
          books
            .filter(book => (category === book.category || category === 'All'))
            .map(book => <Book book={book} key={book.id} removeHandler={removeHandler} />)
        }
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  BooksList,
);
