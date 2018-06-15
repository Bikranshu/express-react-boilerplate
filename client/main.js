import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blueGrey } from 'material-ui/colors';

// Import custom components
import store from './store/store';
import {verifyToken} from './actions/tokenAction';

// Import root app
import App from './containers/app/App';

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
                <App />
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
