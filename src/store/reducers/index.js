import { combineReducers } from 'redux';

function reducer(state = { test: '123' }) {
  return state;
}

export default combineReducers({
  reducer,
});
