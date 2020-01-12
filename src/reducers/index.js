import { combineReducers}  from 'redux';
import { reducer as formReducer } from 'redux-form'
import clients from './clients';

export default combineReducers({
  form: formReducer,
  clients,
});
