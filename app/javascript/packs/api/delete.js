const deleteRequest = book => {
  const { id } = book;
  return fetch(
    `/books/${id}`,
    {
      method: 'DELETE',
    },
  );
};

export default deleteRequest;
