import {
    StyleSheet,
    Text,
    View,
    Platform,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput,
} from 'react-native'

import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
import { clearUser, setLibraryImage } from '../features/Users/userSlice';
import { truncateSessionsTable } from '../persistence';
import { useSelector } from 'react-redux';
import { usePostProfileImageMutation } from '../services/shopServices';

const Profile = ({ navigation }) => {
    {/**Profile Image Edit */ }
    const [image, setImage] = useState(null);
    
    const {triggerPostImage, result} = usePostProfileImageMutation()

    const { user } = useSelector(state => state.auth.value)
    const {localId} = useSelector(state => state.auth.value)
    const { imageLibrary } = useSelector(state => state.auth.value)

    const dispatch = useDispatch()

    const imageFromBase = null

    {/**returnToHome function */ }
    const returnToHome = () => {
        navigation.navigate('Restaurant')
    };

    const defaultImageRoute = 'https://i.ibb.co/GPc0JyC/default-Profile.png'


    {/**Name User Edit  */ }
    const [email, setEmail] = useState(user)

    {/**Password User Edit */ }
    const [password, setPassword] = useState("Random");

    {/**Location User*/ }
    const [country, setCountry] = useState("Argentina");

    {/**verify profile image Permissions */ }
    const verifyLibraryPermissions = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        return granted
    }

    {/**edit profile image function */ }
    const handleImageSelection = async () => {
        try {
            const isLibraryOk = await verifyLibraryPermissions()

            if (isLibraryOk) {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 4],
                    quality: 0.5,
                    base64: true
                })

                if (!result.canceled) {
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                    setImage(image)
                }

            }
        } catch (error) {
            return error
        }
    }

    const confirmImage = async () => {
        try {
            dispatch(setLibraryImage(image))
            triggerPostImage({ image, localId })
        } catch (error) {
            return error
        }
    }

    const signOut = async () => {
        try {
            const response = await truncateSessionsTable()

            dispatch(clearUser())

        } catch (error) {
            return error
        }
    }

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
                        { imageFromBase || image || imageLibrary ? (
                            <Image
                                source={{ uri:  imageFromBase?.image || image || imageLibrary }}
                                style={styles.avatarImage}
                            />

                        ):(
                            <Image
                                source={{ uri: defaultImageRoute }}
                                style={styles.avatarImage}
                            />
                        )}
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
                        <Text style={styles.inputTitleContent}>Email</Text>
                        <View style={styles.inputContent}>
                            <TextInput
                                cursorColor={'gray'}
                                value={email}
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
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={styles.inputContainer}
                >
                    <Text style={styles.inputTitleContent}>Country</Text>
                    <View style={styles.inputContent}>
                        <TextInput
                            cursorColor={'gray'}
                            value={country}
                            onChangeText={value => setCountry(value)}
                            editable={true}
                        />
                    </View>
                </View>

                <View
                    style= {styles.buttonsContainer}
                >
                    <TouchableOpacity
                        style={styles.signOutButton}
                        onPress={signOut}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20
                            }}
                        >
                            Sign Out
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={confirmImage}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20
                            }}
                        >
                            Save Changes
                        </Text>
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
    modalContain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        margin: 20,
        backgroundColor: '#242760',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 35,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            heght: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 5
    },
    buttonsContainer : {
        flexDirection: 'row',
        padding : 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signOutButton: {
        backgroundColor: '#FC6D3F',
        height: 44,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        //marginLeft: 47.5,
        marginTop: 50
    },
    saveButton: {
        backgroundColor: '#56008c',
        height: 44,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        marginLeft: 15,
        marginTop: 50
    }
})