import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { 
    Home, 
    OrderDelivery, 
    Restaurant,
    Cart,
    Profile,
    Favs,
} from '../screens';

import EditProfile from '../screens/EditProfile';
import SettingsScreen from '../screens/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Restaurant' component={Restaurant} />
            <Stack.Screen name='Cart' component={Cart} />
            <Stack.Screen name='Favs' component={Favs} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
            <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
        </Stack.Navigator>
    )
};

export default StackNav

const styles = StyleSheet.create({})