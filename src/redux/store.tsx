import { createStore, combineReducers,applyMiddleware } from 'redux';
import {registrationReducer,fileReducer} from './reducers/registrationReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({registrationReducer,fileReducer});
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store; 