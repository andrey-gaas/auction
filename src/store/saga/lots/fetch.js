import { call, put } from 'redux-saga/effects';
import { setActiveLots, setCompletedLots, setComingLots } from '../../AC/lots';
import LotsApi from '../../../api/lots';

function* fetchLots({ status }) {
  try {
    const response = yield call(LotsApi.fetchAll, status);

    if (response.status === 200) {
      if (status === 'active') yield put(setActiveLots(response.data));
      else if (status === 'completed') yield put(setCompletedLots(response.data));
      else if (status === 'coming') yield put(setComingLots(response.data));
    }
  } catch(e) {
    console.error(e);
  }
}

export default fetchLots;