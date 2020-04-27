import { LOGIN_ACTION } from '../actions/types';
import initialState from '../store/initial';

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
}
