import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import './style.scss';
import { ActionTypes } from './actions/index';
import reducers from './reducers';

import App from './components/app';

//  REMOVES EVERY CONSOLE LOG
// eslint-disable-next-line func-names
// console.log = function () {
// };

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const token = localStorage.getItem('token');
if (token) {
  console.log(localStorage);
  store.dispatch({ type: ActionTypes.NO_INFO_AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
