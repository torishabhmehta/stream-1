import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import configureStore from './store'
import {Route, Switch} from 'react-router'
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import Stream from './components/stream'
import Register from './components/register'
const history = createHistory()
const store = configureStore(history)
ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/stream/" component={Stream} />
        <Route exact path="/register/" component={Register} />
        <Route exact path="/login/" component={Login} /> 
        <PrivateRoute path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));
