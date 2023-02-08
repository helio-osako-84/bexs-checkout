import { combineReducers } from 'redux';

const genericItem = (state = '', { type, payload }) => {
  switch(type) {
    case 'GENERIC_ACTION':
      return payload;
    default:
      return state;
  }
};
  
export default combineReducers({
  genericItem
});
