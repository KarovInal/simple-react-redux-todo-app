import { IS_CHECKED } from '../constants/addItem';

export default (state={ isChecked: false }, action) => {
    switch (action.type) {
        case IS_CHECKED:
            return {
                isChecked: action.payload
            }
    
        default:
            return state;
    }
}