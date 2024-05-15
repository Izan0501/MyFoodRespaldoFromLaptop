import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, Pressable } from "react-native";
import SubmitButton from "../components/SubmitButton";
import InputForm from "../components/InputForm";
import { useSignInMutation } from "../services/authServices";
import { setUser } from "../features/Users/userSlice";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { signinSchema } from "../validations/authLoginShema";

const Login = ({ navigation }) => {

  const dispatch = useDispatch()
  const [triggerSignIn, result] = useSignInMutation()
  const [email, setEmail] = useState()
  const [errorMail, setErrorMail] = useState('')
  const [password, setPassword] = useState()
  const [errorPassword, setErrorPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken
        })
      )
    }
  }, [result])

  {/**Handle Password show-hide Content*/}
  const onPressShowPass = () => {
    setShowPass(!showPass)
  }

  const onSubmit = () => {
    try {
      setErrorMail('')
      setErrorPassword('')
      const validation = signinSchema.validateSync({ email, password })
      triggerSignIn({ email, password })
    } catch (err) {
      switch (err.path) {
        case 'email':
          setErrorMail(err.message)
          break;
        case 'password':
          setErrorPassword(err.message)
        default:
          break;
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.backImg} source={require('../assets/background.png')} />
      <Image style={styles.lightImg} source={require('../assets/light.png')} />
      <Image style={styles.secondLightImg} source={require('../assets/light.png')} />

      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subTitle}>Sign In to your account</Text>

      <InputForm
        label="Example@gmail.com"
        onChange={setEmail}
        error={errorMail}
      />
      <View
        style={styles.inputContainer}
      >
        <InputForm
          label="Password"
          onChange={setPassword}
          error={errorPassword}
          isSecure={showPass ? false : true}
        />
        <TouchableOpacity
          onPress={onPressShowPass}
          style={styles.seePass}
        >
          {showPass ? <Ionicons
            name="eye"
            size={24}
            color="#14434D"
          /> : <Ionicons
            name="eye-off"
            size={24}
            color="#000"
          />}
        </TouchableOpacity>
      </View>

      <Pressable
        style={{
          position: 'absolute',
          backgroundColor: 'transparent',
          height: 55,
          top: 570
        }}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.signUpNav}>First time by the App?</Text>
      </Pressable>

      <SubmitButton onPress={onSubmit} title={'Sign In'} />

      <Text style={styles.bottomWelcome}>Welcome to MyFoddApp</Text>

      <StatusBar style="light" />

    </View>
  );
};

export default Login

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    borderColor: 'transparent'
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginStart: -190,
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
  signUpNav: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    color: 'gray',
    //marginTop: 30
  },
  bottomWelcome: {
    position: 'absolute',
    top: 730,
    fontWeight: 'bold',
    color: 'gray'
  },
  seePass: {
    position: 'absolute',
    top: 37,
    right: 60
  }
});