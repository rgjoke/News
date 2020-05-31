import reducerNews from './reducerNews';
import reducerAuth from './reducerAuth';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({reducerNews, reducerAuth});

export default rootReducer;