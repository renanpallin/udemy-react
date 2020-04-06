import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import initial_state_mock from './initial_state_mock';
import { SAVE_POST } from './actions/postActions';

const store = createStore(
  combineReducers({
    posts(state = [], action) {
      switch (action.type) {
        case SAVE_POST:
          return [...state, action.post];
        default:
          return state;
      }
    },
  }),
  initial_state_mock,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
