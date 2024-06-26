import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity
} from 'react-native'
import { ScrollView } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native';

const SettingsScreen = ({ navigation }) => {

  {/**Navigation Function Section */ }

  const navigateToEditProfile = () => {
    navigation.navigate('Profile')
  };

  const navigateToSecurity = () => {
  };

  const navigateToNotifications = () => {
  };

  const navigateToPrivacy = () => {
  };

  const navigateToSubscription = () => {
  };

  const navigateToSupport = () => {
  };

  const navigateToTermsAndPolicies = () => {
  };

  const returnToHome = () => {
    navigation.navigate('Restaurant')
  };

  const navigateToFreeSpace = () => {
  }

  const navigateToDateServer = () => {
  }

  const navigateToReportProblem = () => {
  }

  const addAccount = () => {
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


  {/**list cache Items */ }

  const listCacheAndPhoneItems = [
    { icon: 'delete-outline', text: 'Free Space', action: navigateToFreeSpace },
    { icon: 'save-alt', text: 'Data Saver', action: navigateToDateServer },

  ];

  {/** List Actions Item  */ }

  const listActionItems = [

    { icon: 'outlined-flag', text: 'Report a problema',asd:0, action: navigateToReportProblem },
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
            color='#000'
            style={{
              marginLeft: 10.5,
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/**Account Section */}

      <ScrollView>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.listAccountItemSectionTitle}>Account</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: '#f9f9f9'
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
                      color={'#56008c'}
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
              backgroundColor:  '#f9f9f9' //'#E5E5E5'
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
                      color={'#56008c'}
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

        {/**List Cache Items */}

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.listAccountItemSectionTitle}>Cache & Phone</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: '#f9f9f9'
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
                      color={'#56008c'}
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

        {/**List Action Settings */}

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.listAccountItemSectionTitle}>Actions Settings</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: '#f9f9f9'//'#F2F2F1'
            }}
          >

            {/**render list Action Items */}

            {
              listActionItems.map((item, index) => (
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
                      color={'#56008c'}
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS == "android" ? 20 : 0,
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
    marginTop: -7.5,
    position: 'absolute',
    left: 0
  },
  headerTitle: {
    marginBottom: 12,
    fontSize: 23,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 12,
  },
  listItemTxt: {
    marginLeft: 16,
    fontWeight: '600',
    fontSize: 16,
    color: '#000'
  },
  listAccountItemSectionTitle: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 12
  }
})