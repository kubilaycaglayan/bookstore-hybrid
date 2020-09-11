import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <>
      <input />
      <select>
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <option key={index} value={category} id="category">
            {category}
          </option>
        ))}
      </select>
      <button type="button">Add Book</button>
    </>
  );
};

export default BooksForm;
