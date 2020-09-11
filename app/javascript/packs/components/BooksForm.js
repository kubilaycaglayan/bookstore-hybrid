import React from 'react';

const BooksForm = () => {
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
      <button type="button">Add Book</button>
    </form>
  );
};

export default BooksForm;
