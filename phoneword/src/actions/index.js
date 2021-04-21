import requestWords from '../services/apiClient';

export const addDigit = (digit) => ({
  type: 'ADD_DIGIT',
  digit,
});

export const deleteDigit = () => ({
  type: 'DELETE_DIGIT',
});

const getWordsSuccess = (words) => ({
  type: 'GET_WORDS_SUCCESS',
  words,
});

const getWodsFailure = () => ({
  type: 'GET_WORDS_FAILURE',
});

export const fetchWords = (digits) => {
  return (dispatch) => {
    if (digits.length === 0) {
      dispatch(getWordsSuccess([]));
    } else {
      try {
        requestWords(digits)
          .then(res => dispatch(getWordsSuccess(res)));
      } catch (error) {
        dispatch(getWodsFailure());
      }
    }
  };
};