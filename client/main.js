import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors';

import store, { history } from './store/configureStore';
import {verifyToken} from './services/tokenService';
import App from './containers/app/AppContainer';

const mountNode = document.getElementById('root');
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: blueGrey
    }
});

// Used to log in if token is valid
store.dispatch(verifyToken());

const renderApp = (Component) => {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                <Component />
                </ConnectedRouter>
            </Provider>
        </MuiThemeProvider>,
        mountNode
    );
};

renderApp(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/app/AppContainer', () => {
        // if you are using harmony modules ({modules:false})
        renderApp(App);
        // in all other cases - re-require App manually
        renderApp(require('./containers/app/AppContainer'));
    });
}