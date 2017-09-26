import { ADD_ITEM } from '../constants/addItem';


export function addItemToList(item) {
    return (dispatch) => {
        dispatch({ type: ADD_ITEM, payload: item });
    }
}