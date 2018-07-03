import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blueGrey} from '@material-ui/core/colors';
import {AppContainer} from 'react-hot-loader';

// Import custom components
import store from './store/store';
import MainRouter from './routers/routes';
import {verifyToken} from './actions/tokenAction';

const mountNode = document.getElementById('root');
const theme = createMuiTheme({
    palette: {
        primary: blueGrey
    }
});

// Used to log in if token is valid
store.dispatch(verifyToken());

const renderApp = () => {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <MainRouter />
            </Provider>
        </MuiThemeProvider>,
        mountNode
    );
};

renderApp();

// Hot Module Replacement of react components
if (module.hot) {
    module.hot.accept('./routers/routes', () => {
        const HotMainRouter = require('./routers/routes').default;
        ReactDOM.render(
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <HotMainRouter />
                </Provider>
            </MuiThemeProvider>,
            mountNode
        );
    });
}