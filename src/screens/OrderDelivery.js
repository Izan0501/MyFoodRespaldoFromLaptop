import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const OrderDelivery = () => {
  return (
    <SafeAreaView
      style={styles.androidSafeArea}>
      <View>
        <Text>OrderDelivery</Text>
      </View>
    </SafeAreaView>
  )
}

export default OrderDelivery

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
})