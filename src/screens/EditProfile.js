import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

const EditProfile = () => {
    return (
        <View>
            <Text
                style={
                    styles.androidSafeArea
                }
            >
                EditProfile
            </Text>
        </View>
    )
}

export default EditProfile

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