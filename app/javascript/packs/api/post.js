import getToken from '../helpers/getToken';

const post = book => {
  const data = JSON.stringify(book);
  const token = getToken();

  return fetch(
    '/books',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
      body: data,
    },
  );
};

export default post;
