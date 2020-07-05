import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;
