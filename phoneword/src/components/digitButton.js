import React from 'react';
import { connect } from 'react-redux';
import { addDigit } from '../actions/index';

function DigitButton ({digit, letters, dispatch}) {
  return (
    <div className="button">
      <button onClick={() => dispatch(addDigit(digit))}>{digit}{letters}</button>
    </div>
  );
}

export default connect()(DigitButton);