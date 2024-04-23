import {
    StyleSheet,
    Text,
    View,
    Platform,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native'

import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';
import avatarsImg from '../constants/avatars';


const Profile = ({ navigation }) => {

    const [selectedImage, setSelectedImage] = useState(avatarsImg[4]);

    const handleImageSelection = () => {
        //let result = ImagePicker
    }

    const returnToHome = () => {
        navigation.navigate('Restaurant')
    };

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
                        color="#000"
                        style={{
                            marginLeft: 10.5,
                            marginTop: 10,
                        }}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
            </View>
            <ScrollView>
                <View
                    style={{
                        alignItems: 'center',
                        marginVertical: 22
                    }}
                >
                    <TouchableOpacity
                        onPress={handleImageSelection}
                    >
                        <Image
                            source={selectedImage}
                            style={styles.avatarImage}
                        />
                        <View
                           style= {styles.imageBtn}
                        >
                            <MaterialIcons
                              name = 'photo-camera'
                              size={32}
                              color={'orange'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

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
    avatarImage: {
        height: 170,
        width: 170,
        borderRadius: 85,
        borderWidth: 2,
        borderColor: 'orange'
    },
    imageBtn : {
        position: 'absolute',
        bottom: 0,
        right: 10,
        zIndex: 9999
    }
})