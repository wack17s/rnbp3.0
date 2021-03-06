import React, { PureComponent } from 'react';
import { View }                 from 'react-native';
import { StackNavigator }       from 'react-navigation';

import MainPage     from '../loginPages/MainPage.js';

import LoginPage    from '../../containers/loginPages/LoginPageContainer.js';
import RegisterPage from '../../containers/loginPages/RegisterPageContainer.js';

const LoginNavigator =  StackNavigator({
    Index : {
        screen : MainPage
    },
    Login : {
        screen : LoginPage
    },
    Register : {
        screen : RegisterPage
    }
}, {
    initialRouteName : 'Index',
    swipeEnabled     : false,
    gesturesEnabled  : false
});

export default class MainNavigation extends PureComponent {
    state = {
        currentRoute : null
    }

    handleStateChange = (prevState, currentState) => {
        const currentRoute = currentState.routes[currentState.index];

        this.setState({ currentRoute: currentRoute.routeName });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LoginNavigator
                    ref = {item => this.navigator = item}
                    onNavigationStateChange = {this.handleStateChange}
                />
            </View>
        );
    }
}
