import React from 'react';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from "react-router-dom"

import 'assets/css/style.css';

import GuestRoute from 'components/Routes/GuestRoute';
import MemberRoute from 'components/Routes/MemberRoute';

import Login from 'pages/Login'
import NotFound from 'pages/404'

function App() {

  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL })

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login} ></GuestRoute>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
