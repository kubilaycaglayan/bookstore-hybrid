import getBooks from './getBooks';
import { post } from '../api/index';

const createWithAPI = book => {
  return async dispatch => {
    await post(book);
    dispatch(getBooks());
  };
};

export default createWithAPI;
