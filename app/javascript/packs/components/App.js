import React from 'react';
import { createStore } from 'redux';
import Provider from 'react-redux';
import BooksList from './BooksList';
import BooksForm from './BooksForm';
import reducer from '../reducers/index';

const initialState = {
  books: [
    {
      id: 111,
      title: 'Great',
      category: 'Action',
    },
  ],
};

const store = createStore(reducer, initialState);

const App = () => {
  return (
    <Provider store={store}>
      <BooksList />
      <BooksForm />
    </Provider>
  );
};

export default App;
