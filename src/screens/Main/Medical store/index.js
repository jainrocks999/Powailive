import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import Animated, { SlideInDown } from 'react-native-reanimated';
const Medicalstore = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Header />
      <Animated.View entering={SlideInDown} >
      <ImageBackground
        source={require('../../../assets/splash_bg.jpg')}
        style={{height: '100%', width: '100%'}}>
        <View style={{flexDirection: 'row', margin: 30}}>
          <Image
            source={require('../../../assets/flaticons/food.png')}
            style={{height: 100, width: 100, tintColor: 'white'}}
          />
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '500',
                color: 'red',
                marginHorizontal: 20,
              }}>
              {' '}
              Tiffin Service{' '}
            </Text>
            {/* <Text style={{fontSize: 17, color: 'white', marginHorizontal: 20}}>
            {' '}
            Lorem ipsum is simply{' '}
          </Text>
          <Text style={{fontSize: 17, color: 'white', marginHorizontal: 20}}>
            dummy text of the printing ...{' '}
          </Text> */}
          </View>
        </View>
      </ImageBackground>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Medicalstore;

const styles = StyleSheet.create({});
