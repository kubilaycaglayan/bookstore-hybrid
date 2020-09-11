import { CHANGE_CATEGORY } from '../constants';

const category = (state = '', action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default category;
