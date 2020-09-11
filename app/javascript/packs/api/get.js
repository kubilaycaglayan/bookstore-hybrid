const get = () => fetch('/books')
  .then(
    response => response.json(),
  );

export default get;
