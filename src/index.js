import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createLogger} from "redux-logger/src";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./store/Store";
import {Provider} from "react-redux";
import {initEnvironment} from "./environment/Env";


const logger = createLogger({
    collapsed: true,
    level: 'info',
});

// Redux DevTools Configuration
const actionCreators = {
};

const baseMiddleware = [];
baseMiddleware.push(logger);
baseMiddleware.push(thunk);

const composeEnhancers = composeWithDevTools({
    actionCreators,
    trace: true,
});

initEnvironment()

// @ts-ignore
const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(...[...baseMiddleware])),
);



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
