import React, { PureComponent } from 'react';
import { View }                 from 'react-native';

import LoginNavigaton from '../navigation/LoginNavigation.js';

export default class extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LoginNavigaton />
            </View>
        );
    }
}
