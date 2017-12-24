import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import { App } from './containers/App';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import 'normalize.css';
import './styles/index.scss';

import Router from './router';


const store = configureStore();
const history = createBrowserHistory();
const theme = createMuiTheme();

ReactDOM.render(
  <AppContainer >
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </MuiThemeProvider>
  </AppContainer>,
  document.getElementById('root')
);
