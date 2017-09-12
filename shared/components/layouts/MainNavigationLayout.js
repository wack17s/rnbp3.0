import React, { PureComponent } from 'react';
import { View }                 from 'react-native';

import MainNavigaton from '../navigation/MainNavigation.js';

export default class extends PureComponent {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MainNavigaton />
            </View>
        );
    }
}
