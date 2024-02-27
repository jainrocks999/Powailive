import {StyleSheet, Text, Image, View,ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../components/Responsive';

import {useNavigation} from '@react-navigation/native';

const Brandconnect = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: 'black', flexGrow: 1 }}>
    <View style={{ width: wp(35), height: hp(17), alignSelf: 'center', marginTop: 30 }}>
      <Image source={require('../../../assets/default.png')} style={{ width: '100%', height: '100%' }} />
    </View>
    <View style={{ alignItems: 'center', marginTop: 15, marginBottom: '35%' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}> Nearby </Text>
      <Text style={{ fontSize: 18, fontWeight: '300', color: 'white' }}> List of all nearby stores </Text>
    </View>
  
      <View
        style={{
          height: hp(50),
          width: wp(90),
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: '#2b2b2b',
          borderRadius: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '10%',
            padding: '5%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('tiffin');
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{tintColor: 'white', height: 100, width: 100}}
                source={require('../../../assets/flaticons/food.png')}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  color: 'white',
                  marginTop: 5,
                }}>
                Tiffin Service
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('medical');
            }}>
            <View
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <Image
                style={{tintColor: 'white', height: 100, width: 100}}
                source={require('../../../assets/flaticons/three-stars.png')}
              />

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  color: 'white',
                  marginTop: 5,
                }}>
                Medical Store
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '10%',
            padding: '5%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('grocery');
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{tintColor: 'white', height: 100, width: 100}}
                source={require('../../../assets/flaticons/heart.png')}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  color: 'white',
                  marginTop: 5,
                }}>
                Grocery Shop
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('restaurant');
            }}>
            <View
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../../../assets/default.png')}
              />

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  color: 'white',
                  marginTop: 5,
                }}>
                Restaurant
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
 
    </ScrollView>
  );
};

export default Brandconnect;

const styles = StyleSheet.create({});
