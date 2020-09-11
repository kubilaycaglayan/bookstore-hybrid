import { REMOVE_BOOK, CREATE_BOOK, GET_BOOKS } from '../constants';

const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter(book => !(book.id === action.book.id));
    case GET_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export default books;
