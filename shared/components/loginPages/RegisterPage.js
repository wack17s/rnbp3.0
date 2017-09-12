import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import Styles from './MainPageStyles.js';

export default class extends PureComponent {
    static propTypes = {
        setToken : PropTypes.func.isRequired
    }

    handleRegister = () => {
        this.props.setToken();
    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableWithoutFeedback onPress={this.handleRegister}>
                    <View style={Styles.button}>
                        <Text>Register</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
