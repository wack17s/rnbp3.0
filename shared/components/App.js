import React, { Component } from 'react';
import { Provider }         from 'react-redux';

import MainLayout from '../containers/layouts/MainLayoutContainer.js';

import store from '../store/configureStore.js';

export default class extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainLayout />
            </Provider>
        );
    }
}
