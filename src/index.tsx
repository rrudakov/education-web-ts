import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore, AppStoreState } from './core/store';
import { Store, CombinedState, AnyAction } from 'redux';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './core/theme';

const store: Store<CombinedState<AppStoreState>, AnyAction> = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
