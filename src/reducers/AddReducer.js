import { ADD_ITEM } from '../constants/addItem';


export default (state=[], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                action.payload
            ]
            
        default:
            return state;
    }
}