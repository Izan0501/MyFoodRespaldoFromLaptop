import AppNavigator from "./src/navigation/AppNavigator";
import React from "react";
import store from "./src/store";
import { Provider } from "react-redux";


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

