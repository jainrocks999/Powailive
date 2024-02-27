import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Header from '../Header';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../components/Responsive';
import Animated, {  SlideInDown, SlideInUp } from 'react-native-reanimated';
const Donate = () => {
  const data = [
    {imageUrl: require('../../assets/sliderimg/img1.jpg')},
    {imageUrl: require('../../assets/sliderimg/img1.jpg')},
    {imageUrl: require('../../assets/sliderimg/img1.jpg')},
    {imageUrl: require('../../assets/sliderimg/img1.jpg')},
    {imageUrl: require('../../assets/sliderimg/img1.jpg')},
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={item.imageUrl} style={styles.image} />
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <Header />
      <Animated.View entering={SlideInDown} >
      <ScrollView style={{ backgroundColor: 'black'}}>
      <View style={{alignSelf: 'center', marginVertical: '10%'}}>
        <Image
          style={{tintColor: 'white', height: hp(15), width: hp(15)}}
          source={require('../../assets/flaticons/box.png')}></Image>
      </View>
      <View style={{alignSelf: 'center', height: '30%'}}>
        <Carousel
          layout={'default'}
          data={data}
          renderItem={renderItem}
          sliderWidth={wp(90)}
          itemWidth={wp(80)}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingHorizontal: 30,
          height: hp(50),
        }}>
        <Text
          style={{
            fontSize: wp(5),
            fontWeight: 'bold',
            color: 'white',
        
          }}>
          Cause 13
        </Text>
        <Text style={{fontSize: wp(4), color: 'white', marginTop: 10}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </Text>
      </View>
      </ScrollView>
      <View
        style={{
          height: hp(6),
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: '#ad1a1a',
          justifyContent: 'center',
        }}>
        <View style={styles.titleContainer}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
              borderWidth: 1,
              padding: 5,
              borderRadius: 50,
              borderColor: 'white',
              paddingHorizontal: 20,
            }}>
            {' '}
            DONATE
          </Text>
        </View>
      </View>
      </Animated.View>
    </View>
  );
};

export default Donate;

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: hp(25),
  },
  titleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: hp(5),
  },
});
