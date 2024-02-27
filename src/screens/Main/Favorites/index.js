import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../components/Responsive';
import {useNavigation} from '@react-navigation/native';
import Animated, {SlideInDown} from 'react-native-reanimated';
const images = [
  require('../../../assets/sliderimg/img4.jpg'),
  require('../../../assets/sliderimg/img2.jpg'),
];
const Favorites = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{}}>
        <SliderBox
          images={images}
          dotColor="red"
          inactiveDotColor="grey"
          height={250}
        />
      </View>
      {/* <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}> Saffron by The Sassy Spoon</Text> 
            <Text style={{color:'white', fontSize:15, fontWeight:'300'}}> Restaurant Saffron by The Sassy Spoon is a premium delivery-only cloud kitchen by</Text>   
        </View>    */}
      <View style={styles.FeatureContainer}>
        <Text style={styles.Featurecategory}>Favorites</Text>
      </View>
      <Animated.View entering={SlideInDown}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Covid');
          }}>
          <View
            style={{
              height: hp(15),
              backgroundColor: '#2b2b2b',
              alignItems: 'center',
              marginTop: hp(4),
              flexDirection: 'row',
            }}>
            <Image
              style={{
                tintColor: 'grey',
                height: hp(10),
                width: hp(10),
                marginHorizontal: wp(15),
              }}
              source={require('../../../assets/flaticons/coronavirus.png')}></Image>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{marginHorizontal: wp(-8), fontSize: 20, color: 'red'}}>
                {' '}
                COVID-19
              </Text>
              <Text
                style={{
                  marginHorizontal: wp(-8),
                  fontSize: 15,
                  color: 'white',
                }}>
                {' '}
                Test Desc
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('restaurant');
          }}>
          <View
            style={{
              height: hp(15),
              backgroundColor: '#2b2b2b',
              alignItems: 'center',
              marginTop: hp(2),
              flexDirection: 'row',
            }}>
            <Image
              style={{
                tintColor: 'grey',
                height: hp(10),
                width: hp(10),
                marginHorizontal: wp(15),
              }}
              source={require('../../../assets/default.png')}></Image>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{marginHorizontal: wp(-8), fontSize: 20, color: 'red'}}>
                {' '}
                Restaurant
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  FeatureContainer: {
    flexDirection: 'column',

    paddingHorizontal: wp(7),
  },
  Featurecategory: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'white',
  },

  titleContainer: {
    flexDirection: '',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: hp(20),
  },
});
