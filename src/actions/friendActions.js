import * as types from './actionTypes';
import friendApi from '../api/mockFriendApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadFriendsSuccess(friends) {
    return { type: types.LOAD_FRIENDS_SUCCESS, friends };
}

export function createFriendSuccess(friend) {
    return { type: types.CREATE_FRIEND_SUCCESS, friend };
}

export function updateFriendSuccess(friend) {
    return { type: types.UPDATE_FRIEND_SUCCESS, friend };
}


// Thunks
export function loadFriends() {
    return function(dispatch) {
        dispatch(beginAjaxCall());        
        return friendApi.getAllFriends().then(friends => {
            dispatch(loadFriendsSuccess(friends));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveFriend(friend) {
    return (dispatch, getState) => {
        dispatch(beginAjaxCall());      
        return friendApi.saveFriend(friend)
            .then(savedFriend => {
                friend.id ? dispatch(updateFriendSuccess(savedFriend)) 
                          : dispatch(createFriendSuccess(savedFriend));
            })
            .catch(error => {
                dispatch(ajaxCallError(error));
                throw(error);
            });
    };
}