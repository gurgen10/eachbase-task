import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todoReducer } from './redusers/todoReducer';

/**
 * Combine all redux reducers.
 */
const rootReducer = combineReducers({
  todo: todoReducer
})
/**
 * Create redux store.
 */
export default createStore(rootReducer, applyMiddleware(thunk));
