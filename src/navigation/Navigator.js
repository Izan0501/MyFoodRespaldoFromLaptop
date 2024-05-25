import AppNavigator from "./AppNavigator";
import React, { useEffect } from "react";
import AuthStackNavigator from "./AuthStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import {  useSelector } from "react-redux";
import { getSession } from "../persistence";
import { useDispatch } from "react-redux";
import { setUser } from "../features/Users/userSlice";


const  Navigator = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth.value)

  useEffect(() => {
    (async ()=> {
      try {
        const response = await getSession() 
        if (response.rows._array.length) {
          const user = response.rows._array[0]
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token
          }))
        }
      } catch (error) {
        return error
      }
    })()
  }, [])

  return (
    <NavigationContainer>
        {user ? <AppNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
  );
}

export default Navigator