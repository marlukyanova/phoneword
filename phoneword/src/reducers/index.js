import { combineReducers } from 'redux';

const digits = (state = '', action) => {
  switch (action.type) {
  case 'ADD_DIGIT':
    return action.digit === '1' ? state : state + action.digit;
  case 'DELETE_DIGIT':
    return state.slice(0, -1);
  default:
    return state;
  }
};

const words = (state = {
  isFetching: false,
  hasErrors: false,
  items: []
}, action) => {
  switch (action.type) {
  case 'GET_WORDS':
    return {
      ...state,
      isFetching: true
    };
  case 'GET_WORDS_SUCCESS':
    return {
      ...state,
      isFetching: false,
      hasErrors: false,
      items: action.words
    };
  case 'GET_WORDS_FAILURE':
    return {
      ...state,
      isFetching: false,
      hasErrors: true
    };
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  digits,
  words
});

export default rootReducer;