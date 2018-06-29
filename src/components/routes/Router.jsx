import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';

import Authorization from '../../components/pages/authorization';
import Gallery from '../../components/pages/gallery';
import PageNotFound from '../../components/pages/pageNotFound';

const Router = () => (
  <Switch>
    <PrivateRoute path="/gallery" component={Gallery} />
    <Route path="/login" component={Authorization} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default Router;
