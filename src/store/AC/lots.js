import { LOTS_FETCH, SET_ACTIVE_LOTS, SET_COMPLETED_LOTS, SET_COMING_LOTS } from '../actions/lots';

export const lotsFetch = status => ({ type: LOTS_FETCH, status });
export const setActiveLots = data => ({ type: SET_ACTIVE_LOTS, data });
export const setCompletedLots = data => ({ type: SET_COMPLETED_LOTS, data });
export const setComingLots = data => ({ type: SET_COMING_LOTS, data });