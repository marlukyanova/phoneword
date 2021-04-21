import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWords, deleteDigit } from '../actions/index';
import DigitButton from '../components/digitButton';

import './App.css';

function App ({dispatch, isFetching, hasErrors, words, digits}) {
  const digitsOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
          .map(digit => 
            <DigitButton 
              key={digit}
              digit= {digit}
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
