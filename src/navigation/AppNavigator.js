import {
    StyleSheet,
    View,
} from 'react-native';

import {
    Profile,
} from '../screens';

import SettingsScreen from '../screens/SettingsScreen';
import StackNav from './StackNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
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
        /*<NavigationContainer>*/
            <Tab.Navigator
                backBehavior='Main'
                initialRouteName='Main'
                screenOptions={
                    screenOptions
                }
            >
                <Tab.Screen
                    name='Settings'
                    component={SettingsScreen}
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
                                        name="settings"
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
        /*</NavigationContainer >*/
    );
};

export default AppNavigator

const styles = StyleSheet.create({
    tabCustomBtn: {
        flex: 1,
        height: 60,
        backgroundColor: 'white',
    },
})