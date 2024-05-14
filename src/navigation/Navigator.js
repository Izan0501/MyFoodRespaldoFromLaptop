import AppNavigator from "./AppNavigator";
import React from "react";
import AuthStackNavigator from "./AuthStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";


const  Navigator = () => {

  const {user} = useSelector(state => state.auth.value)

  return (
    <NavigationContainer>
        {user ? <AppNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default Navigator