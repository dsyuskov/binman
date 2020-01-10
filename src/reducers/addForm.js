import { IS_SHOW_ADD_FORM } from '../actions/addForm';

const initState = {
  isShowAddForm: false,
}

export default function(state = initState, action) {
  switch (action.type) {
    case IS_SHOW_ADD_FORM: {
      return {
        ...state,
        isShowAddForm: action.payload,
      }
    }
    default:
  }
  return state;
}