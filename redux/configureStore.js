import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {profile} from './profile';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            profile
        }),
        applyMiddleware(thunk,logger)
    );
    return store
}