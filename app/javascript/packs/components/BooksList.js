import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const mapStateToProps = state => ({
  books: state.books,
  category: state.category,
});

const BooksList = props => {
  const { books, category } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>BOOK ID</th>
          <th>TITLE</th>
          <th>CATEGORY</th>
        </tr>
      </thead>
      <tbody>
        {
          books
            .filter(book => category === book.category)
            .map(book => <Book book={book} key={book.id} />)
        }
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  null,
  // mapDispatchToBooksList,
)(
  BooksList,
);
