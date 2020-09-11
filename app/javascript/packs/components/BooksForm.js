import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createWithAPI } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createWithAPI(book)),
});

const BooksForm = props => {
  const { createBook } = props;
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const state = {
    title: '',
    category: 'Action',
  };

  const handleInputChange = event => {
    state.title = event.target.value;
  };

  const handleSelectChange = event => {
    state.category = event.target.value;
  };

  const handleSubmit = () => {
    if (state.title === '') return;
    const book = {
      title: state.title,
      category: state.category,
      id: Math.floor(Math.random() * 100 + 1),
    };
    // fire action
    createBook(book);
  };

  return (
    <form>
      <input onChange={handleInputChange} />
      <select onChange={handleSelectChange}>
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={category} id="category">
            {category}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleSubmit}>Add Book</button>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(BooksForm);
