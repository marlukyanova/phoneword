import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchWords, deleteDigit } from '../actions/index';
import DigitButton from '../components/digitButton';

import './App.css';

function App ({dispatch, hasErrors, words, digits}) {
  const digitsOptions = [
    {digit: '1', letters: ''},
    {digit: '2', letters: 'abc'},
    {digit: '3', letters: 'def'},
    {digit: '4', letters: 'ghi'},
    {digit: '5', letters: 'jkl'},
    {digit: '6', letters: 'mno'},
    {digit: '7', letters: 'pqrs'},
    {digit: '8', letters: 'tuv'},
    {digit: '9', letters: 'wxyz'},
    {digit: '0', letters: ''},
  ];

  const [isRealWords, setIsRealWords] = useState(false);

  useEffect(() => {
    dispatch(fetchWords(digits, isRealWords));
  }, [digits]);

  const renderWords = () => {
    if (hasErrors) return <p>Unable to display words.</p>;
    return <div>{
      words.length === 0 
        ? <p>No words</p>
        :  words.map((word) => <div key={word}><span>{word}</span></div>)}
    </div>;
  };

  return (
    <div className="App">
      <div className="phone">
        <div className="display">{renderWords()}</div>
        <div className="buttons">
          {digitsOptions
            .map(item => 
              <DigitButton 
                key={item.digit}
                digit= {item.digit}
                letters={item.letters}
              />)}
          <button className="anotherButton" onClick={() => setIsRealWords(!isRealWords)}>Real Words</button>
          <button className="anotherButton" onClick={() => dispatch(deleteDigit())}>Delete</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  words: state.words.items,
  hasErrors: state.words.hasErrors,
  digits: state.digits,
});

export default connect(mapStateToProps)(App);
