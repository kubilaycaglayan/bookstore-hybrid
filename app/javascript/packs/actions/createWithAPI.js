import getBooks from './getBooks';
import { post } from '../api/index';

const createWithAPI = book => async dispatch => {
  await post(book);
  dispatch(getBooks());
};

export default createWithAPI;
