import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddlware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddlware];

const store = createStore(rootReducer, middlewares);

sagaMiddlware.run(rootSaga);

export default store;
