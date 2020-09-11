import { combineReducers } from 'redux';
import books from './books';
import category from './category';

const reducer = combineReducers({
  books,
  category,
});

export default reducer;
