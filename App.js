import Navigator from "./src/navigation/Navigator";
import React from "react";
import store from "./src/store";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { initSQLiteDB } from "./src/persistence";

(async () => {
  try {
    const response = await initSQLiteDB()
  } catch (error) {
  }
})()

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require('./src/assets/JosefinSans-Regular.ttf')
  })

  if (!fontsLoaded || fontError) {
    return null
  }

  if (fontsLoaded && !fontError) {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App

