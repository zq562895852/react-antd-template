import * as types from '../types/index'
// reducer
export const loginReducer = (state = 0, action) => {
  switch (action.type) {
  case types.ADD:
    return ++state;
  default:
    return state;
  }
};
