import React, {useState} from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../components/Responsive';
import {  useSelector,useDispatch } from 'react-redux';
const Login = () => {
  const userdara=useSelector(state=>state.auth.userdetails)
  const dispatch=useDispatch()
  console.log(userdara);
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  showAlert = viewId => Alert.alert('Alert', 'Button pressed ' + viewId);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ImageBackground
        source={require('../../assets/splash_bg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <ImageBackground
          source={require('../../assets/splash_logo.png')}
          resizeMode="contain"
          style={{width: '100%', height: '85%'}}>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="ENTER E-MAIL"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={email => setEmail({email})}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="ENTER PASSWORD"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={password => setPassword({password})}
              />
            </View>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  navigation.navigate('forgot');
                }}
                style={{
                  color: 'white',
                  marginLeft: '40%',
                  padding: 10,
                  fontSize: 15,
                  fontWeight: '600',
                }}>
                FORGOT PASSWORD
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => {
                // navigation.navigate('Home');
                dispatch({
                  type:'auth/loginRequest'
                })
                
              }}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100%',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: wp(85),
    height: hp(6),
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '400',
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: 'white',
    marginTop: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Login;
