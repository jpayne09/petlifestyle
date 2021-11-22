import * as ActionTypes from './ActionTypes';

export const addProfile = profile => ({
    type: ActionTypes.ADD_PROFILE,
    payload: profile
});

export const postProfile = (profileId, age) => dispatch => {
    console.log("postprofile is here");
    const newProfile ={
        profileId: profileId,
        age: age,
    };

    setTimeout(() => {
        dispatch(addProfile(newProfile))
        console.log("Set Timeout dispatch",newProfile);
    }, 2000);

}
