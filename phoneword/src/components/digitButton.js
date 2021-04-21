import React from 'react';
import { connect } from 'react-redux';
import { addDigit } from '../actions/index';

import './digitButton.css';

function DigitButton ({digit, letters, dispatch}) {
  return (
    <div className="button">
      <button onClick={() => dispatch(addDigit(digit))}><span className="column"><span className="digit">{digit}</span><span className="letters">{letters}</span></span></button>
    </div>
  );
}

export default connect()(DigitButton);