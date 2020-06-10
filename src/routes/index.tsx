import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import CreateBill from '../pages/CreateBill';

import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/app" isPrivate component={Dashboard} />
    <Route path="/nova" component={CreateBill} />
  </Switch>
);

export default Routes;
