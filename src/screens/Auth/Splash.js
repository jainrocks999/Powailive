import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../components/Responsive';

const Splash = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'black', }}>
      <ImageBackground
        source={require('../../assets/splash_bg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View >
          <ImageBackground
            source={require('../../assets/splash_logo.png')}
            resizeMode="contain"
            style={{width: '100%', height: '95%'}}>
            <View style={{marginTop: '140%' , width:'80%', alignSelf:'center'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('login');
                }}>
                <Text style={styles.Text}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <View style={{  width:'80%', alignSelf:'center'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('signup');
                }}>
                <Text style={styles.Text}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: '20%',
                alignSelf: 'center',
                marginTop: '5%',
              }}>
              <TouchableOpacity>
                <Image
                  style={{tintColor: 'white', height: hp(4), width: hp(4)}}
                  source={require('../../assets/flaticons/facebook.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{tintColor: 'white', height: hp(4), width: hp(4)}}
                  source={require('../../assets/flaticons/instagram.png')}></Image>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    //borderWidth:2
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontWeight: '500',
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    padding: 10,
    marginBottom: '6%',

    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: '15%',
  },
});
export default Splash;
