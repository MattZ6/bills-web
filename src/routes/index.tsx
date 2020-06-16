import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Main from '../layouts/Main';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/sign/in" component={SignIn} />

    <Route path="/app" isPrivate component={Dashboard} layout={Main} />
    <Route
      path="/transactions"
      isPrivate
      component={Transactions}
      layout={Main}
    />

    <Redirect from="**" to="/app" />
  </Switch>
);

export default Routes;
