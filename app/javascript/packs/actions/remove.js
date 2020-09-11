import { REMOVE_BOOK } from '../constants';

const remove = book => ({
  type: REMOVE_BOOK,
  book,
});

export default remove;
