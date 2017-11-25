import { combineReducers, Reducer } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import todos from './todos';

export interface RootState {
  todos: TodoStoreState;
}

export default combineReducers<RootState>({
  todos,
  firebase: firebaseReducer
});
