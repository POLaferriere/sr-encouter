import { compose, createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import * as firebase from 'firebase';
import { logger } from '../middleware';
import rootReducer, { RootState } from '../reducers';

const firebaseConfig = {
  apiKey: "AIzaSyA_2PDDbYqnEIvJUBFdayJMpVdPXbt_0MM",
  authDomain: "sr-encounter.firebaseapp.com",
  databaseURL: "https://sr-encounter.firebaseio.com",
  projectId: "sr-encounter",
  storageBucket: "sr-encounter.appspot.com",
  messagingSenderId: "104178341153"
};

const config = {
  userProfile: 'users'
}

firebase.initializeApp(firebaseConfig);

export function configureStore(initialState?: RootState) {
  let sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(logger, sagaMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(
    rootReducer, 
    initialState, 
    compose(
      reactReduxFirebase(firebase, config),
      middleware
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
