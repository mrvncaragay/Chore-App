import { LOGIN_ACTION } from './types';
import initialState from '../store/initial';

export const loginAction = () => (dispatch) => {
  dispatch({
    type: LOGIN_ACTION,
    payload: true,
  });
};
