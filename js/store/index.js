import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = createLogger();

export default function configureStore() {
    const middleware = applyMiddleware(thunk, logger);
    const createStoreWithMiddleware = compose(middleware);
    return createStoreWithMiddleware(createStore)(reducers);
}