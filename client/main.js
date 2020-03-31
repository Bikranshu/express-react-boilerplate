import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

import store, { history } from './store/configureStore';
import { verifyToken } from './services/tokenService';
import App from './containers/app/AppContainer';

const mountNode = document.getElementById('root');

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blueGrey,
  },
});

// Used to log in if token is valid
store.dispatch(verifyToken());

ReactDOM.render(
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  </Suspense>,
  mountNode
);
