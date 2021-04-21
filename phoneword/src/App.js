import React, { useState, useEffect } from 'react';
import getWords from './apiClient';

import './App.css';

function App() {
  const [numbers, setNumbers] = useState('');
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (numbers.length === 0) {
      setWords([]);
    } else {
      getWords(numbers)
        .then((res) => setWords(res));
    }
  }, [numbers]);

  return (
    <div className="App">
      <div className="display">Words: {words}</div>
      <div className="buttons">
        <button onClick={() => setNumbers(numbers + '1')}>1</button>
        <button onClick={() => setNumbers(numbers + '2')}>2</button>
        <button onClick={() => setNumbers(numbers + '3')}>3</button>
        <button onClick={() => setNumbers(numbers + '4')}>4</button>
        <button onClick={() => setNumbers(numbers + '5')}>5</button>
        <button onClick={() => setNumbers(numbers + '6')}>6</button>
        <button onClick={() => setNumbers(numbers + '7')}>7</button>
        <button onClick={() => setNumbers(numbers + '8')}>8</button>
        <button onClick={() => setNumbers(numbers + '9')}>9</button>
        <button onClick={() => setNumbers(numbers.slice(0, -1))}>Delete</button>
      </div>
    </div>
  );
}

export default App;
