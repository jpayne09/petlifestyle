import * as ActionTypes from './ActionTypes';

export const profile = (state = {profile:[]}, action) => {
    switch(action.type){
        case ActionTypes.ADD_PROFILE:
            return {...state, profile: action.payload};
        default:
            return state;
    }
}