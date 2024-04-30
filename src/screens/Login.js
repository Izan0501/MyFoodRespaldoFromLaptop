import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, View, StyleSheet, Image } from "react-native";
import ButtonGradient from "../components/Button";

const Login = () => {
    
  return (
    <View style={styles.container}>
      <Image style={styles.backImg} source = {require('../assets/background.png')} />
      <Image style={styles.lightImg} source = {require('../assets/light.png')} />
      <Image style={styles.secondLightImg} source = {require('../assets/light.png')} />
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subTitle}>Sign In to your account</Text>
      <TextInput
        placeholder="Example@gmail.com"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword}>Forgot your Password?</Text>
      <ButtonGradient/>
      <Text style={styles.createAccount}>Dont have an account?</Text>
      <StatusBar style="light"/>
    </View>
  );
};

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems:'center',
  },
  title: {
    marginStart : -190,
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
    //paddingBottom: 100
  },
  subTitle : {
    marginStart : -190,
    fontSize: 17,
    color: 'gray',
    fontWeight: 'bold',
    //paddingBottom: 300
  },
  textInput : {
    //flex :1,
    borderWidth: 1,
    borderColor: 'transparent',
    paddingStart: 20,
    padding: 10,
    width: '80%',
    marginTop: 25,
    marginStart : -10,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  backImg : {
    position : 'absolute',
    flex : 1,
    width : '100%'
  },
  lightImg : {
    flex : 1 ,
    position : 'absolute',
    top : -15,
    right : 95,
    //color: '#fff',
    //flex : 1,
  },
  secondLightImg : {
    position : 'absolute',
    top : -85,
    right: 8,
    
  },
  forgotPassword :{
    justifyContent:'center',
    alignItems:'center',
    fontSize: 14,
    color: 'gray',
    marginTop: 20
  },
  createAccount : {
    position: 'absolute',
    top : 720,
    fontWeight: 'bold',
    color: 'gray'
  },
});