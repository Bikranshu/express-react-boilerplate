import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './root'

const mountApp = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <Root/>
    </AppContainer>,
    mountApp
);

// For hot reloading of react components
if (module.hot) {
    module.hot.accept('./root', () => {
        const HotApp = require('./root').default;
        ReactDOM.render(
            <AppContainer>
                <HotApp/>
            </AppContainer>,
            mountApp
        );
    });
}