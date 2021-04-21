const BASE_URL = 'http://localhost:3001';

const requestWords = (numbers, isRealWords) => {
  return (
    fetch(`${BASE_URL}/words/${numbers}?words=${isRealWords}`)
      .then((res) => res.json())
  );
};

export default requestWords;
