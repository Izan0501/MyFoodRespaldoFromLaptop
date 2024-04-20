import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity
} from 'react-native'

import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native'
import React from 'react'

const SettingsScreen = ({ navigation }) => {

  const returnToHome = () => {
    navigation.navigate('Restaurant')
  }

  {/**render header */}

  return (
    <SafeAreaView
      style={styles.androidSafeArea}
    >
      <View
        style={styles.headerContain}
      >
        <TouchableOpacity 
        style= {styles.backBtn}
        onPress={() => navigation.goBack(returnToHome())} 
        >
          <MaterialIcons
            name="keyboard-backspace"
            size={30}
            color="black"
            style={{
              marginLeft: 10.5,
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS == "android" ? 40 : 0,
    haderButton: {
      width: 50,
      paddingLeft: 40,
      justifyContent: "center",
    },
  },
  headerContain: {
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  backBtn: {
    position: 'absolute',
    left: 0
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  }
  })
