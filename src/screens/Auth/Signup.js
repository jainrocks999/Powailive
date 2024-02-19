import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  showAlert = viewId => Alert.alert('Alert', 'Button pressed ' + viewId);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
         <ImageBackground
        source={require('../../assets/splash_bg.jpg')}
        style={{width: '100%', height: '100%',}}>
        <ImageBackground
          source={require('../../assets/splash_logo.png')}
          style={{width: '100%', height: '80%',}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="ENTER NAME"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => setEmail({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="ENTER E-MAIL"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => setPassword({password})}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="ENTER CONTACT"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => setPassword({password})}
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="RE-TYPE-PASSWORD"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => setPassword({password})}
          />
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => showAlert('login')}>
          <Text style={styles.loginText}>SIGN UP</Text>
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

    marginTop: '80%',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    fontSize:18,
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
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 220,
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
    fontSize:20,fontWeight:'500'
  },
});

export default Signup;
