import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routers from './routes';
import registerServiceWorker from './registerServiceWorker';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));


ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
