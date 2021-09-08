import { SET_ACTIVE_LOTS, SET_COMPLETED_LOTS, SET_COMING_LOTS } from '../actions/lots';

const initialState = {
  active: [],
  completed: [],
  coming: [],
};

function lots(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_LOTS:
      return { ...state, active: action.data };

    case SET_COMPLETED_LOTS:
      return { ...state, completed: action.data };

    case SET_COMING_LOTS:
      return { ...state, coming: action.data };

    default: return state;
  }
}

export default lots;
