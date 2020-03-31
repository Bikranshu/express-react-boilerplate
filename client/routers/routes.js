import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';

export const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
export const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));
export const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));

const Router = () => (
  <Fragment>
    <Switch>
      <RestrictRoute exact path="/" component={AsyncLoginForm} />
      <RestrictRoute path="/signup" component={AsyncSignUpForm} />

      <MainLayout>
        <Switch>
          <PrivateRoute path="/dashboard" component={AsyncDashboard} />
        </Switch>
      </MainLayout>

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
