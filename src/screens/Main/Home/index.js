import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header/index';
import {SliderBox} from 'react-native-image-slider-box';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../components/Responsive';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const images = [
  require('../../../assets/sliderimg/img1.jpg'),
  require('../../../assets/sliderimg/img2.jpg'),
  require('../../../assets/sliderimg/img3.jpg'),
  require('../../../assets/sliderimg/img4.jpg'),
  require('../../../assets/sliderimg/img1.jpg'),
  require('../../../assets/sliderimg/img2.jpg'),
];

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
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView style={styles.scrollView}>
        <View>
          <SliderBox images={images} dotColor="red" inactiveDotColor="grey" />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Donate');
          }}>
          <View
            style={{
              height: hp(7),
              backgroundColor: '#ad1a1a',
              justifyContent: 'center',
            }}>
            <View style={styles.titleContainer}>
              <Image
                style={{tintColor: 'white', height: hp(5), width: hp(5)}}
                source={require('../../../assets/flaticons/box.png')}></Image>
              <Text style={styles.category}>JOIN THE CAUSE</Text>
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
        </TouchableOpacity>
        <View style={styles.FeatureContainer}>
          <Text style={styles.Featurecategory}>Featured</Text>
        </View>
        <FlatList
          horizontal={true}
          data={Img}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
        <View style={styles.FeatureContainer}>
          <Text style={styles.Featurecategory}>Deals</Text>
        </View>
        <FlatList
          horizontal={true}
          data={Img}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
        <View style={styles.FeatureContainer}>
          <Text style={styles.Featurecategory}>Favorites</Text>
        </View>
        <FlatList
          horizontal={true}
          data={Img}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: hp(5),
  },

  FeatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,

    height: hp(7),
  },

  category: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    borderRightWidth: 0.8,
    borderColor: 'white',
    marginRight: 20,
  },
  Featurecategory: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 10,
  },
  scrollView: {
    backgroundColor: 'black',
  },
  imageContainer: {
    padding: 10,
    paddingHorizontal: 5,
    alignItems: 'stretch',
  },
  image: {
    width: hp(30),
    height: hp(15),

    resizeMode: 'stretch',
  },
  text: {
    width: wp(50),
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
    fontSize: 15,
  },
});
