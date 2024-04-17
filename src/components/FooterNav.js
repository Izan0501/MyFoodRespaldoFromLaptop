import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-paper';
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const FooterNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                components={Home}
            />
            <Tab.Screen
                name='Settings'
                components={{
                    tabBarIcon: () => (
                        <Icon
                            source={'home'}
                            color='#000'
                            size={28}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default FooterNav

const styles = StyleSheet.create({})