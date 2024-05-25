import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Authentication/Home'
import RouteConstants from '../constants/RouteConstants';

const AuthenticationStack = createStackNavigator();
export default () => {
    return (
        <AuthenticationStack.Navigator
            initialRouteName={RouteConstants.AUTH}>
            <AuthenticationStack.Screen name={RouteConstants.HOME} component={HomeScreen} options={{ title: 'Welcome', headerShown: false }} />
        </AuthenticationStack.Navigator>
    );
};

