import {
    StyleSheet,
    View,
} from 'react-native';

import {
    Profile,
    Favs,
    Cart
} from '../screens';

import StackNav from './StackNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'relative',
        margin: 0,
        padding: 0,
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
    }
}

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                backBehavior='Main'
                initialRouteName='Main'
                screenOptions={
                    screenOptions
                }
            >
                <Tab.Screen
                    name='Main'
                    component={StackNav}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <MaterialIcons
                                        name="local-restaurant"
                                        size={30}
                                        color={
                                            focused ? '#F9813A' : '#E5E5E5'
                                        }
                                    />
                                </View>
                            )

                        }
                    }}
                />

                <Tab.Screen
                    name='Cart'
                    component={Cart}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Feather
                                        name="shopping-bag"
                                        size={26}
                                        color={
                                            focused ? '#F9813A' : '#E5E5E5'
                                        }
                                    />

                                </View>
                            )

                        }
                    }}
                />

                <Tab.Screen
                    name='Favs'
                    component={Favs}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <MaterialIcons
                                        name="favorite"
                                        size={26}
                                        color={
                                            focused ? '#F9813A' : '#E5E5E5'
                                        }
                                    />
                                </View>
                            )

                        }
                    }}
                />

                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <AntDesign
                                        name="user"
                                        size={26}
                                        color={
                                            focused ? '#F9813A' : '#E5E5E5'
                                        }
                                    />
                                </View>
                            )

                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
};

export default AppNavigator

const styles = StyleSheet.create({})