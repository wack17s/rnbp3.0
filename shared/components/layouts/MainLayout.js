import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { View }                 from 'react-native';

import MainNavigationLayout from './MainNavigationLayout.js';
import LoginNavigationLayout from './LoginNavigationLayout.js';

export default class extends PureComponent {
    static propTypes = {
        token : PropTypes.string
    }

    static defaultProps = {
        token : null
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'gray' }}>
                {this.props.token
                    ? <MainNavigationLayout />
                    : <LoginNavigationLayout />}
            </View>
        );
    }
}
