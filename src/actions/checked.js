import { IS_CHECKED } from '../constants/addItem';

export function onChangeChecked(value) {
    return (dispatch) => {
        dispatch({ type: IS_CHECKED, payload: value });
    }
}