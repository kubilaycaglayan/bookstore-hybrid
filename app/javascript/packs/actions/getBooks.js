import { get } from '../api';
import { GET_BOOKS } from '../constants';

const getBooks = () => async dispatch => {
  // loading screen action
  const books = await get();
  dispatch({
    type: GET_BOOKS,
    books,
  });
};

export default getBooks;
