import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import Styles from '../../loginPages/MainPageStyles.js';

export default class extends PureComponent {
    static propTypes = {
        logOut : PropTypes.func.isRequired
    }

    handleLogout = () => {
        this.props.logOut();
    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableWithoutFeedback onPress={this.handleLogout}>
                    <View style={Styles.button}>
                        <Text>Logout</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
