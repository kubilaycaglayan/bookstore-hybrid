import getToken from '../helpers/getToken';

const deleteRequest = book => {
  const { id } = book;
  const token = getToken();

  return fetch(
    `/books/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token,
      },
    },
  );
};

export default deleteRequest;
