import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Import custom components
import MainRouter from '../../routers/routes';


class App extends Component {

    render() {


        return (
            <MainRouter />
        );
    }
}

App.propTypes = {
};


export default hot(module)(App);
