import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen
                name='Login'
                component={Login}
            />

            <Stack.Screen
                name='SignUp'
                component={SignUp}
            />

        </Stack.Navigator>
    )
};

export default AuthStackNavigator

const styles = StyleSheet.create({})