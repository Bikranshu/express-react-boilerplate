import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../utils/jwtUtil';

const RestrictRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Redirect
                    to={{
                        pathname: '/dashboard',
                        state: { from: props.location },
                    }}
                />
            ) : (
                    <Component {...props} />
            )
        }
    />
);

export default RestrictRoute;