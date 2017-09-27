import { combineReducers } from 'redux';
import item from './AddReducer';
import isChecked from './isChecked'


export default combineReducers({
    item,
    isChecked
});