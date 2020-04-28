import { takeEvery, put } from "redux-saga/effects";
import initialState from "../store/initial";

function* loginAsync() {
  try {
    yield put({ type: "LOGIN_ACTION_ASYNC", payload: !initialState.isLoggedIn });
  } catch (error) {
    console.log(error);
  }
}

export default function* watchLogin() {
  yield takeEvery("LOGIN_ACTION", loginAsync);
}
