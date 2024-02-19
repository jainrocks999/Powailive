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
  ImageBackground
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Forgot = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  showAlert = viewId => Alert.alert('Alert', 'Button pressed ' + viewId);

  return (
    <View style={{ flex:1, backgroundColor:'black'}}>
            <ImageBackground
        source={require('../../assets/splash_bg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <ImageBackground
        resizeMode='contain'
          source={require('../../assets/splash_logo.png')}
          style={{width: '100%', height: '100%'}}>
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

      <TouchableOpacity
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => showAlert('login')}>
        <Text style={styles.loginText}>RESET PASSWORD</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:'100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    fontSize:18,
  
    flex: 1,
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
    marginTop: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'black',
    fontSize:20,
  },
});

export default Forgot;
