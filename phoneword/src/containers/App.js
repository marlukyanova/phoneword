import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWords, deleteDigit } from '../actions/index';
import DigitButton from '../components/digitButton';

import './App.css';

function App ({dispatch, isFetching, hasErrors, words, digits}) {
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
  ];

  useEffect(() => {
    dispatch(fetchWords(digits));
  }, [digits]);

  const renderWords = () => {
    if (isFetching) return <p>Loading words...</p>;
    if (hasErrors) return <p>Unable to display words.</p>;
    // return posts.map((post) => <Post key={post.id} post={post} />)
    return <p>Words: {words}</p>;
  };

  return (
    <div className="App">
      <div className="display">{renderWords()}</div>
      <div className="buttons">
        {digitsOptions
          .map(item => 
            <DigitButton 
              key={item.digit}
              digit= {item.digit}
              letters={item.letters}
            />)}
        <button onClick={() => dispatch(deleteDigit())}>Delete</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isFetching: state.words.isFetching,
  words: state.words.items,
  hasErrors: state.words.hasErrors,
  digits: state.digits,
});

export default connect(mapStateToProps)(App);
