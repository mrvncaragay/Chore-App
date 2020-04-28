import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/index";
import watchLogin from "../sagas/saga";

const initialState = {
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
sagaMiddleware.run(watchLogin);

export default store;
