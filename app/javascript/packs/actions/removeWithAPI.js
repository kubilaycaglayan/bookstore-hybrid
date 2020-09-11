import getBooks from './getBooks';
import { deleteRequest } from '../api/index';

const removeWithAPI = book => {
  return async dispatch => {
    await deleteRequest(book);
    dispatch(getBooks());
  };
};

export default removeWithAPI;
