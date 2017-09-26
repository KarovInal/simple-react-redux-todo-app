import { createStore, applyMiddleware } from 'redux';
import Reducer from '../reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        Reducer,
        initialState,
        applyMiddleware(
            logger,
            thunkMiddleware
        )
    );  

    if (module.hot) {
        module.hot.accept('../reducers', () => {
          const nextRootReducer = require('../reducers')
          store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}