import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore,compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import thunk from "redux-thunk";


import * as serviceWorker from './serviceWorker';

export const saveState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
  } catch (e) {
      // ignore write errors
      console.log(e);
  }
};

let middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    // persistedState,
    composeEnhancer(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
 
  document.getElementById('root')
);

store.subscribe(() => {
  saveState({
      user: store.getState().user
  });
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister();

