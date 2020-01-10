import { combineReducers}  from 'redux';
import { reducer as formReducer } from 'redux-form'
import addForm from './addForm';

export default combineReducers({
  form: formReducer,
  addForm,
});
