import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity
} from 'react-native'

import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native';

const SettingsScreen = ({ navigation }) => {

  const ListItems = [
    { icon: 'person-outline', text: 'Edit Profile', action: navigateToEdtiProfile },
    { icon: 'security', text: 'Security', action: navigateToSecurity },
    { icon: 'notifications-none', text: 'Notifications', action: navigateToNotifications },
    { icon: 'lock-outline', text: 'Privacy', action: navigateToNotifications }
  ];

  const navigateToEdtiProfile = () => {
    navigation.navigate('EditProfile')
  };

  const navigateToSecurity = () => {
    console.log('Security function');
  };

  const navigateToNotifications = () => {
    console.log('Notifications function');
  };

  const navigateToPrvacy = () => {
    console.log('Privacity function');
  };

  /*const renderListItems = (icon, text, action) => {

  }*/

  const returnToHome = () => {
    navigation.navigate('Restaurant')
  };

  {/**render header */ }

  return (
    <SafeAreaView
      style={styles.androidSafeArea}
    >
      <View
        style={styles.headerContain}
      >
        <TouchableOpacity
          style={styles.backBtn}
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
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.listItemSectionTitle}>Account</Text>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: 'gray'
          }}
        >
          {
            ListItems.map((item, index) => (
              <React.Fragment
                key={index}
              >
                <TouchableOpacity
                onPress={item.action}
                style={
                  styles.listItem
                }
              >
                <MaterialIcons
                  name={item.icon}
                  size={24}
                  color={'black'}
                />
                <Text
                  style={styles.listItemTxt}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
              </React.Fragment>
            ))
          }
        </View>
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
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 12
  },
  listItemTxt: {
    marginLeft: 16,
    fontWeight: '600',
    fontSize: 16
  },
  listItemSectionTitle: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 12
  }
})
