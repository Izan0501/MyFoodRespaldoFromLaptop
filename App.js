import AppNavigator from "./src/navigation/AppNavigator";
import React from "react";
import store from "./src/store";
import { Provider } from "react-redux";
import AuthStackNavigator from "./src/navigation/AuthStackNavigator";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  const [user, setUser] = React.useState(null);
  
  return (
    <NavigationContainer>
      <Provider store={store}>
        {user ? <AppNavigator /> : <AuthStackNavigator />}
      </Provider>
    </NavigationContainer>
  );
}

