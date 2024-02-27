import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  style,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../components/Responsive';
import Header from '../../../components/Header';
import Animated, { SlideInDown } from 'react-native-reanimated';

const Img = [
  {
    id: '1',
    image: require('../../../assets/sliderimg/img1.jpg'),
    title: 'shernis of Powai',
  },
  {
    id: '2',
    image: require('../../../assets/sliderimg/img2.jpg'),
    title: 'Best practice when you suspect to have Covid-19',
  },
  {
    id: '3',
    image: require('../../../assets/sliderimg/img3.jpg'),
    title: 'Best practice when you suspect to have Covid-19',
  },
  {
    id: '4',
    image: require('../../../assets/sliderimg/img4.jpg'),
    title: 'Best practice when you suspect to have Covid-19',
  },
  {
    id: '5',
    image: require('../../../assets/sliderimg/img1.jpg'),
    title: 'Best practice when you suspect to have Covid-19',
  },
  {
    id: '6',
    image: require('../../../assets/sliderimg/img2.jpg'),
    title: 'Best practice when you suspect to have Covid-19',
  },
  {
    id: '7',
    image: require('../../../assets/sliderimg/img4.jpg'),
    title: 'Best practice when you suspect to have Covid-19',
  },
];
const Restaurant = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Header />
      <Animated.View entering={SlideInDown} >
      <ImageBackground
        source={require('../../../assets/splash_bg.jpg')}
        style={{height: '100%', width: '100%'}}>
        <View style={{flexDirection: 'row', margin: 50}}>
          <Image
            source={require('../../../assets/default.png')}
            style={{height: 100, width: 100}}
          />
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '500',
                color: 'red',
                marginHorizontal: 40,
                marginTop: 20,
              }}>
              Restaurant
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
        <View style={{marginTop: '20%'}}>
          <FlatList
            horizontal={false}
            data={Img}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image}/>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </ImageBackground>
      </Animated.View>
    </SafeAreaView>
  );
};
export default Restaurant;
const styles = StyleSheet.create({
  image: {
    width: wp(90),
    height: hp(25),
  },
  imageContainer: {
    marginRight: '5%',
    marginLeft: '5%',
  },
});
