import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import progress from './progress';

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	progress,
});

export default createRootReducer;
