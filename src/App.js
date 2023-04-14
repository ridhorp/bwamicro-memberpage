import React from 'react';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from "react-router-dom"

import 'assets/css/style.css';

import GuestRoute from 'components/Routes/GuestRoute';
import MemberRoute from 'components/Routes/MemberRoute';

import NotFound from 'pages/404'

import Login from 'pages/Login'
import MyClass from 'pages/MyClass'
import Unauthenticated from 'pages/401'

function App() {

  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL })

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login} ></GuestRoute>
          <GuestRoute path="/private" component={Unauthenticated} ></GuestRoute>
          <MemberRoute exact path="/" component={MyClass} ></MemberRoute>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
