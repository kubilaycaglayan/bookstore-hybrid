import React from 'react';
import BooksList from './BooksList';
import BooksForm from './BooksForm';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <>
    <CategoryFilter />
    <BooksList />
    <BooksForm />
  </>
);

export default App;
