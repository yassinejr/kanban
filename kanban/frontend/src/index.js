// react imports
import React from 'react';
import ReactDOM from 'react-dom';

// project imports
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import homeReducer from './containers/Home/reducers';
import authReducer from './components/Auth/reducers';

// 3rd party imports
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
