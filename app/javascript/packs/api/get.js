import { BASE_URL } from '../constants';

const get = () => fetch(BASE_URL)
  .then(
    response => response.json(),
  );

export default get;
