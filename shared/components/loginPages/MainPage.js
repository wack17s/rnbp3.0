import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

import Styles from './MainPageStyles.js';

export default class extends PureComponent {
    static propTypes = {
        navigation : PropTypes.object.isRequired
    }

    handleLogin = () => {
        this.props.navigation.navigate('Login');
    }

    handleRegister = () => {
        this.props.navigation.navigate('Register');
    }

    static navigationOptions = {
        header : null
    }

    render() {
        return (
            <View style={Styles.container}>
                <TouchableWithoutFeedback onPress={this.handleLogin}>
                    <View style={Styles.button}>
                        <Text>Login</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.handleRegister}>
                    <View style={Styles.button}>
                        <Text>Register</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
