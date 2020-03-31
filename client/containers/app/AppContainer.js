import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Import custom components
import MainRouter from '../../routers/routes';

class AppContainer extends Component {
  render() {
    return <MainRouter />;
  }
}

export default hot(module)(AppContainer);
