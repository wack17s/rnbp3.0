import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { View }                 from 'react-native';
import { TabNavigator }         from 'react-navigation';

import SomeTab from '../../containers/mainPages/Dashboard/SomeTabContainer.js';

const Tabs = TabNavigator({
    Some1 : {
        screen : SomeTab
    },
    Some2 : {
        screen : SomeTab
    },
    Some3 : {
        screen : SomeTab
    }
});

export default class extends PureComponent {
    static propTypes = {
        navigation : PropTypes.object.isRequired
    }

    static navigationOptions = {
        header : null
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Tabs screenProps={{ mainNavigation: this.props.navigation }} />
            </View>
        );
    }
}
