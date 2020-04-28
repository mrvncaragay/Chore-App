
import initialState from '../store/initial';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_ACTION_ASYNC':
      return {
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
}
