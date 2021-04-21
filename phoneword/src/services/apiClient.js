const BASE_URL = 'http://localhost:3001';

const requestWords = (numbers) => {
  return (
    fetch(`${BASE_URL}/words/${numbers}`)
      .then((res) => res.json())
  );
};

export default requestWords;
