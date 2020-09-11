import { CHANGE_CATEGORY } from '../constants';

const changeCategory = category => ({
  type: CHANGE_CATEGORY,
  category,
});

export default changeCategory;
