import { createStore, applyMiddleware } from "redux";
import createSagaMonitor from "@clarketm/saga-monitor";
import createSagaMiddleware from "redux-saga";

/**
 * STORES AND SAGAS
 */

import reducers from "./ducks";
import sagas from "./sagas";

const middlewares = [];

const sagaMonitor = createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export default store;
