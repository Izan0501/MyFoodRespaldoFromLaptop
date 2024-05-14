import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable} from "react-native";
import SubmitButton from "../components/SubmitButton";


const SignUp = ({
  navigation,
  label,
  onChange,
  error = '',
  isSecure = false
}) => {

  const [input, setInput] = React.useState("");
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }
    
  return (
    <View style={styles.container}>
      <Image style={styles.backImg} source = {require('../assets/background.png')} />
      <Image style={styles.lightImg} source = {require('../assets/light.png')} />
      <Image style={styles.secondLightImg} source = {require('../assets/light.png')} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitle}>Sign Up for the first Time</Text>
      <TextInput
        placeholder="Example@gmail.com"
        style={styles.textInput}
        velue={input}
        //onChangeText={onChangeText}
        //onChange={() => {}}
        error={""}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        //onChangeText={onChangeText}
        //onChange={()=> {}}
        secureTextEntry={isSecure = true}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.textInput}
        //onChangeText={onChangeText}
        //onChange={()=> {}}
        secureTextEntry={isSecure = true}
      />
      <Pressable
        style={{
          backgroundColor: 'transparent',
          height: 60
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginNav}>Already have an account?</Text>
      </Pressable>
      <SubmitButton style={{marginTop: 10}} onPress={()=> {}} title={'Sign Up'}/>
      <Text style={styles.bottomWelcome}>Welcome to MyFoddApp</Text>
      <StatusBar style="light"/>
    </View>
  );
};

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems:'center',
  },
  title: {
    marginStart : -75,
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
  loginNav :{
    justifyContent:'center',
    alignItems:'center',
    fontSize: 14,
    color: 'gray',
    marginTop: 40,
  },
  bottomWelcome : {
    position: 'absolute',
    top : 800,
    fontWeight: 'bold',
    color: 'gray'
  },
});