import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';

import Authorization from '../../components/pages/authorization';
import Photos from '../../components/pages/photos';
import PageNotFound from '../../components/pages/pageNotFound';

const Router = () => (
  <Switch>
    <PrivateRoute path="/" exact component={Photos} />
    <Route path="/login" component={Authorization} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Router;
