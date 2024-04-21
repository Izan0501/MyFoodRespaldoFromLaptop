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

  {/**Navigation Function Section */ }

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfile')
  };

  const navigateToSecurity = () => {
    console.log('Security function');
  };

  const navigateToNotifications = () => {
    console.log('Notifications function');
  };

  const navigateToPrivacy = () => {
    console.log('Privacity function');
  };

  const navigateToSubscription = () => {
    console.log('Privacity function');
  };

  const navigateToSupport = () => {
    console.log('Privacity function');
  };

  const navigateToTermsAndPolicies = () => {
    console.log('Privacity function');
  };

  const returnToHome = () => {
    navigation.navigate('Restaurant')
  };

  const navigateToFreeSpace = () => {
    console.log('Free Space Function');
  }

  const navigateToDateServer = () => {
    console.log('Date server');
  }

  const navigateToReportProblem = () => {
    console.log('Report a Problem');
  }

  const addAccount = () => {
    console.log('Add Account');
  }

  const logout = () => {

  }

  {/** Account Items */ }

  const listAccountItems = [
    { icon: 'person-outline', text: 'Edit Profile', action: navigateToEditProfile },
    { icon: 'security', text: 'Security', action: navigateToSecurity },
    { icon: 'notifications-none', text: 'Notifications', action: navigateToNotifications },
    { icon: 'lock-outline', text: 'Privacy', action: navigateToPrivacy }
  ];

  {/**support Items */ }

  const listSupportItems = [
    { icon: 'credit-card', text: 'My Subscrition', action: navigateToSubscription },
    { icon: 'help-outline', text: 'Help & Support', action: navigateToSupport },
    { icon: 'info-outline', text: 'Terms and Policies', action: navigateToTermsAndPolicies },
  ];

  const listCacheAndPhoneItems = [
    { icon: 'delete-outline', text: 'Free Space', action: navigateToFreeSpace },
    { icon: 'save-alt', text: 'Data Saver', action: navigateToDateServer },

  ];

  const listActionItems = [

    { icon: 'outline-flag', text: 'Report a problem', action: navigateToReportProblem },
    { icon: 'help-outline', text: 'Add Account', action: addAccount },
    { icon: 'info-outline', text: 'Log Out', action: logout },

  ]


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

      {/**Account Section */}

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.listAccountItemSectionTitle}>Account</Text>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: '#E5E5E5'
          }}
        >
          {/**render list Account Items */}
          {
            listAccountItems.map((item, index) => (
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

      {/** Support List Items */}

      <View style={{ marginBottom: 12 }}>
        <Text style={styles.listAccountItemSectionTitle}>Support & About</Text>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: '#E5E5E5'
          }}
        >
          {/**render list Support Items */}
          {
            listSupportItems.map((item, index) => (
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
                    color={'#000'}
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
      <View style={{ marginBottom: 12 }}>
        <Text style={styles.listAccountItemSectionTitle}>Cache & Phone</Text>
        <View
          style={{
            borderRadius: 12,
            backgroundColor: '#E5E5E5'
          }}
        >
          {/**render list Cache Items */}
          {
            listCacheAndPhoneItems.map((item, index) => (
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
                    color={'#000'}
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
  listAccountItemSectionTitle: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 12
  }
})
