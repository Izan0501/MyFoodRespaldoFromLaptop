import {
    StyleSheet,
    Text,
    View,
    Platform,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput
} from 'react-native'

import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';
import { avatarsImg, imagesDataUrl } from '../constants/avatars';
import * as ImagePicker from 'expo-image-picker';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';


const Profile = ({ navigation }) => {

    const [selectedImage, setSelectedImage] = useState(avatarsImg[0]);

    const [name, setName] = useState("User");

    const [email, setEmail] = useState("UserName@gmail.com")

    const [password, setPassword] = useState("RandomPassword");

    const [country, setCountry] = useState("Argentina");

    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const today = new Date();
    const startDate = getFormatedDate (
        today.setDate(today.getDate() + 1),
        "YYYY/MM/DD"
    )

    const [selectedStartDate, setSelectedStartDate] = useState('01/01/1990');
    const [startedDate, setSatartedDate] = useState("12/12/2024");

    const handleChangeStartDate = (propDate) => {
        setSatartedDate(propDate)
    }

    const handleOnChangeStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker)
    }

    const handleImageSelection = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })

        console.log(result.assets);

        if (!result.canceled) {
            setSelectedImage(result.assets[0])
        }

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
                            style={styles.imageBtn}
                        >
                            <MaterialIcons
                                name='photo-camera'
                                size={32}
                                color={'orange'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <View
                        style={styles.inputContainer}
                    >
                        <Text style={styles.inputTitleContent}>Name</Text>
                        <View style={styles.inputContent}>
                            <TextInput
                                cursorColor={'gray'}
                                value={name}
                                onChangeText={value => setName(value)}
                                editable={true}
                            />
                        </View>
                    </View>
                    <View
                        style={styles.inputContainer}
                    >
                        <Text style={styles.inputTitleContent}>Email</Text>
                        <View style={styles.inputContent}>
                            <TextInput
                                cursorColor={'gray'}
                                value={email}
                                onChangeText={value => setEmail(value)}
                                editable={true}
                            />
                        </View>
                    </View>
                    <View
                        style={styles.inputContainer}
                    >
                        <Text style={styles.inputTitleContent}>Password</Text>
                        <View style={styles.inputContent}>
                            <TextInput
                                cursorColor={'gray'}
                                value={password}
                                onChangeText={value => setPassword(value)}
                                editable={true}
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <View
                        style={styles.inputContainer}
                    >
                        <Text style={styles.inputTitleContent}>Date or Birth</Text>
                        <TouchableOpacity
                            onPress={handleOnChangeStartDate}
                            style={styles.inputContent}
                        >
                            <Text>{selectedStartDate}</Text>
                        </TouchableOpacity>
                    </View>
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
    imageBtn: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        zIndex: 9999
    },
    inputContainer: {
        flexDirection: 'column',
        marginBottom: 6,
        marginLeft: 20
    },
    inputTitleContent: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000'
    },
    inputContent: {
        height: 44,
        width: '100%',
        borderColor: '#E4E4E5',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 6,
        justifyContent: 'center',
        paddingLeft: 5,
        marginLeft: -10,
        marginBottom: 5
    },
})