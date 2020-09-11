import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const mapStateToProps = state => ({
  books: state.books,
});

const BooksList = props => {
  const { books } = props;

  return (
    <table>
      <tr>
        <th>BOOK ID</th>
        <th>TITLE</th>
        <th>CATEGORY</th>
      </tr>
      {books.map(book => {
        return <Book book={book} key={book.id} />;
      })}
    </table>
  );
};

BooksList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
};

connect(
  mapStateToProps,
  null,
  // mapDispatchToBooksList,
)(
  BooksList,
);

export default BooksList;
