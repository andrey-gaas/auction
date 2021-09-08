  
import { all } from 'redux-saga/effects';
import lots from './lots';

function* rootSaga() {
  yield all([
    lots(),
  ]);
}

export default rootSaga;