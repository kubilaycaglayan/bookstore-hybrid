const post = book => {
  const data = JSON.stringify(book);
  return fetch(
    '/books',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    },
  );
};

export default post;
