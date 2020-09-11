import getBooks from './getBooks';
import { deleteRequest } from '../api/index';

const removeWithAPI = book => async dispatch => {
  await deleteRequest(book);
  dispatch(getBooks());
};

export default removeWithAPI;
