import { createStore, combineReducers,applyMiddleware } from 'redux';
import {registrationReducer} from './reducers/registrationReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({registrationReducer});
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store; 