import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import SubmitButton from "../components/SubmitButton";
import InputForm from "../components/InputForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../services/authServices";
import { setUser } from "../features/Users/userSlice";

const SignUp = ({
  navigation
}) => {

  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const dispatch = useDispatch()

  const [triggerSignUp, result] = useSignUpMutation()

  useEffect(()=> {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken
        })
      )
    }
  })

  const onSubmit = () => {
    triggerSignUp({email, password, returnSecureToken: true})
  }

  return (
    <View style={styles.container}>
      <Image style={styles.backImg} source={require('../assets/background.png')} />
      <Image style={styles.lightImg} source={require('../assets/light.png')} />
      <Image style={styles.secondLightImg} source={require('../assets/light.png')} />

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>Sign Up for the first Time</Text>

      <InputForm
        label="Example@gmail.com"
        onChange={setEmail}
        error={errorMail}
      />

      <InputForm
        label="Password"
        onChange={setPassword}
        error={errorPassword}
        isSecure={true}
      />

      <InputForm
        label="Confirm Password"
        onChange={setconfirmPassword}
        error={errorConfirmPassword}
        isSecure={true}
      />

      <Pressable
        style={{
          position: 'absolute',
          backgroundColor: 'transparent',
          height: 55,
          top: 600
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginNav}>Already have an account?</Text>
      </Pressable>

      <SubmitButton style={{ marginTop: 10 }} onPress={onSubmit} title={'Sign Up'} />

      <Text style={styles.bottomWelcome}>Welcome to MyFoddApp</Text>

      <StatusBar style="light" />
    </View>
  );
};

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginStart: -55,
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
    //paddingBottom: 100
  },
  subTitle: {
    marginStart: -190,
    fontSize: 17,
    color: 'gray',
    fontWeight: 'bold',
    //paddingBottom: 300
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
  backImg: {
    position: 'absolute',
    flex: 1,
    width: '100%'
  },
  lightImg: {
    flex: 1,
    position: 'absolute',
    top: -15,
    right: 95,
    //color: '#fff',
    //flex : 1,
  },
  secondLightImg: {
    position: 'absolute',
    top: -85,
    right: 8,

  },
  loginNav: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    color: 'gray',
    //marginTop: 40,
  },
  bottomWelcome: {
    position: 'absolute',
    top: 750,
    fontWeight: 'bold',
    color: 'gray'
  },
});