import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function friendReducer(state=initialState.friends, action) {
    switch(action.type) {
        case types.LOAD_FRIENDS_SUCCESS: 
            return action.friends;
        case types.CREATE_FRIEND_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.friend)
            ];
        case types.UPDATE_FRIEND_SUCCESS:
            return [
                ...state.filter(friend => friend.id !== action.friend.id),
                Object.assign({}, action.friend)
            ];            
        default: 
            return state;
    }
}