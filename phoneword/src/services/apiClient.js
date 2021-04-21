const BASE_URL = 'http://localhost:3001';

const requestWords = (numbers) => {
  console.log('sending request to server for', numbers);
  return (
    fetch(`${BASE_URL}/words/${numbers}`)
      // .then(res => res.status <= 400 ? res : Promise.reject(res))
      .then((res) => res.json())
  );
};

export default requestWords;
