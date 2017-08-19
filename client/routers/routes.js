import React, {Component} from 'react';

// Import routing components
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

// Import custom components
import NotFound from '../components/error/NotFound';
import LoginForm from '../containers/auth/LoginContainer';
import SignUpForm from '../containers/auth/SignUpContainer';
import Dashboard from '../containers/dashboard/DashboardContainer';
import AuthenticatedRoute from './AuthenticatedRoute';

const Router = () => (
    <ConnectedRouter history={history}>
        <div>
            <Switch>
                <Route exact path="/" component={LoginForm}/>
                <Route path="/signup" component={SignUpForm}/>
                <AuthenticatedRoute path="/dashboard" component={Dashboard}/>

                <Route component={NotFound}/>
            </Switch>
        </div>
    </ConnectedRouter>
);

export default Router;
