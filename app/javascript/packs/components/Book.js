import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, removeHandler } = props;
  const { id, title, category } = book;

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" onClick={() => { removeHandler(book); }}>Remove (X)</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default Book;
