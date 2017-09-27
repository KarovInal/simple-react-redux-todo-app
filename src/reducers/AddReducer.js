import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../constants/addItem';


export default (state=[], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                action.payload
            ];

        case DELETE_ITEM:
            const oldState = [...state];
            oldState.splice(action.payload, 1);
            return [...oldState]

        case UPDATE_ITEM: 
            const oldstate = [...state];
            oldstate.splice(action.payload.index, 1, action.payload.item)
            return [...oldstate];
            
        default:
            return state;
    }
}