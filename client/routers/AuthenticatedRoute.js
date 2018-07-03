import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {getToken} from '../utils/storageUtil'

const isAuthenticated = () => {
    return !!getToken();
};

const AuthenticatedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

export default AuthenticatedRoute;