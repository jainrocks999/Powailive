import {StyleSheet, Text, Image, View, ImageBackground} from 'react-native';
import React from 'react';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../components/Responsive';
import {ScrollView} from 'react-native-gesture-handler';

const Brandconnect = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 20,
      }}>
      {/* <ImageBackground
        source={require('../../../assets/splash_bg.jpg')}
        style={{width: '100%', height: '100%',}}> */}

      <View
        style={{
          width: '35%',
          height: '20%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <ImageBackground
          source={require('../../../assets/default.png')}
          style={{width: '100%', height: '100%'}}></ImageBackground>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
          {' '}
          Nearby
        </Text>
        <Text style={{fontSize: 18, fontWeight: '300', color: 'white'}}>
          {' '}
          List of all nearby stores
        </Text>
      </View>
      <View
        style={{
          height:hp(45),
          width: '90%',

          alignSelf: 'center',
          marginVertical: '20%',
          backgroundColor: '#2b2b2b',
          borderRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(4),
            marginHorizontal: wp(14),
            justifyContent: 'space-between',
          }}>
          <Image
            style={{tintColor: 'white', height: hp(8), width: wp(20)}}
            source={require('../../../assets/flaticons/food.png')}></Image>

          <Image
            style={{tintColor: 'white', height: hp(8), width: wp(25)}}
            source={require('../../../assets/flaticons/three-stars.png')}></Image>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginHorizontal: wp(10),
          }}>
          <Text style={{fontSize: 20, fontWeight: '400', color: 'white'}}>
            Tiffin Service
          </Text>
          <Text style={{fontSize: 20, fontWeight: '400', color: 'white'}}>
            Medical Store
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp(8),
            marginHorizontal: wp(14),
            justifyContent: 'space-between',
          }}>
          <Image
            style={{
              tintColor: 'white',
              height: hp(12),
              width: wp(17),        
            }}
            source={require('../../../assets/flaticons/heart.png')}></Image>
          <Image
            style={{height: hp(12), width: wp(25), marginHorizontal: wp(-5)}}
            source={require('../../../assets/default.png')}></Image>
        </View>
        <View
          style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop: 10,
            marginHorizontal: wp(10),
          }}>
          <Text style={{fontSize: 20, fontWeight: '400', color: 'white'}}>
            Grocery Shop
          </Text>
          <Text style={{fontSize: 20, fontWeight: '400', color: 'white'}}>
            Restaurant
          </Text>
        </View>
      </View>
      {/* </ImageBackground> */}
    </ScrollView>
  );
};

export default Brandconnect;

const styles = StyleSheet.create({});
