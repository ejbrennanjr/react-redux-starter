import * as types from './actionTypes';
import CategoryApi from '../api/mockCategoryApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadCategoriesSuccess(categories) {
    return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

// Thunks
export function loadCategories() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return CategoryApi.getAllCategories().then(categories => {
            dispatch(loadCategoriesSuccess(categories));
        }).catch(error => {
            throw(error);
        });
    };
}