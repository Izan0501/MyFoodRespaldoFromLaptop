import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
//import { colors } from '../constants/colors';

const InputForm = ({
    label, 
    onChange, 
    error = "",
    isSecure = false
}) => {

    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }

  return (
    <View style={styles.inputContainer}>
      {/*<Text style={styles.subtitle}>{label}</Text>*/}
      <TextInput
        style ={styles.textInput}
        placeholder={label}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        cursorColor={'gray'}
      />
      {error ? 
        <Text style = {styles.error}>
            {error}
        </Text>
        :
        null
    }
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        borderColor: 'transparent'
    },
    subtitle: {
        width: '90%',
        fontSize: 16,
        fontFamily: 'Josefin'
    },
    error: {
        paddintTop: 2,
        fontSize: 16,
        color: 'red',
        fontFamily: 'Josefin',
        fontStyle: 'italic',
    },
    textInput: {
        //flex :1,
        borderWidth: 1,
        borderColor: 'transparent',
        paddingStart: 20,
        padding: 10,
        width: '80%',
        marginTop: 25,
        marginStart: -10,
        borderRadius: 30,
        backgroundColor: '#fff'
      },
})