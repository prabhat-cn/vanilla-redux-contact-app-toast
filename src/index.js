import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'

ReactDOM.render(
  <Provider store= {store}>
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
