import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";


const SubmitButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <LinearGradient
                // Button Linear Gradient
                colors={['#4eb0b0', '#30aad9', '#4eb0b0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
};

export default SubmitButton;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 140,
        top: 630,
        //backgroundColor: '#000'
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        position: 'absolute',
        width: '100%',
        height: 65,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        //top: 90,
    },
});

/*const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        //backgroundColor: colors.teal600,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        color: colors.platinum,
        fontFamily: 'PlayFair',
        fontSize: 22
    },
});*/