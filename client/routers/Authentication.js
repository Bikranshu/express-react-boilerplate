import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {isAuthenticated} from '../utils/jwtUtil';

const Authentication = ({component: Component, ...rest}) => (
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

export default Authentication;