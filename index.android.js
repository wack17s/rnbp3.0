import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './shared/components/App.js';

class bp extends Component {
    render() {
        return <App />;
    }
}

AppRegistry.registerComponent('bp', () => bp);
