import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../constants/addItem';


export function addItemToList(item) {
    return (dispatch) => {
        dispatch({ type: ADD_ITEM, payload: item });
    }
}

export function deleteItemToList(id) {
    return (dispatch) => {
        dispatch({ type: DELETE_ITEM, payload: id });
    }
}

export function updateItemToList(item) {
    return (dispatch) => {
        dispatch({ type: UPDATE_ITEM, payload: item });
    }
}