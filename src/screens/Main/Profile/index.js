import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';

const Profile = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ImageBackground
        source={require('../../../assets/splash_bg.jpg')}
        style={{height: '100%', width: '100%'}}>
        <View
          style={{
            height: '70%',
            width: '100%',
            backgroundColor: '#f2f2f2',
            marginTop: '65%',
          }}>
          <Image
            source={require('../../../assets/flaticons/Profile.png')}
            style={{
              tintColor: 'black',
              height: '30%',
              width: '30%',
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: 'black',
            }}
          />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{color: 'red', fontSize: 20, fontWeight: '400'}}>
              {' '}
              Change Picture
            </Text>
          </View>
          <View style={{marginTop: '10%'}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="User Name"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Email"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Mobile Number"
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              marginTop: '20%',
            }}>
            <Text style={{color: 'red', fontSize: 20, fontWeight: '700'}}>
              {' '}
              UPDATE
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 60,
    borderBottomWidth: 1,
    padding: 10,
    color:'black'
  },
});
