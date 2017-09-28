import { IS_CHECKED } from '../constants/addItem';

export default (state= false, action) => {
    switch (action.type) {
        case IS_CHECKED:
            return action.payload
        default:
            return state;
    }
}
