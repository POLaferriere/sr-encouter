import { combineReducers, Reducer } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import todos from './todos';

export interface RootState {
  todos: TodoStoreState;
  firebase: any;
}

export default combineReducers<RootState>({
  todos,
  firebase: firebaseReducer,
  form: formReducer
});
