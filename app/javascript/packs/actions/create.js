import { CREATE_BOOK } from '../constants';

const create = book => ({
  type: CREATE_BOOK,
  book,
});

export default create;
