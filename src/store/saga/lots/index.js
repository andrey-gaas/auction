import { takeEvery } from 'redux-saga/effects';
import { LOTS_FETCH } from '../../actions/lots';
import fetchLots from './fetch';

export default function* saga () {
  yield takeEvery(LOTS_FETCH, fetchLots);
};
