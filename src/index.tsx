import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AnyAction, CombinedState, Store } from 'redux';
import { App } from './App';
import { AppStoreState, configureStore } from './core/store';
import { theme } from './core/theme';
import * as serviceWorker from './serviceWorker';

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
