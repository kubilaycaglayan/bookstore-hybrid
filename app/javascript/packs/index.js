/* eslint-disable max-len */
// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers/index';
import { getBooks } from './actions/index';

const initialState = {
  books: [
    {
      id: 111,
      title: 'Great',
      category: 'Action',
    },
    {
      id: 112,
      title: 'Amazing',
      category: 'History',
    },
    {
      id: 113,
      title: 'Amazing',
      category: 'Horror',
    },
  ],
  category: 'All',
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

store.dispatch(getBooks());

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
});
