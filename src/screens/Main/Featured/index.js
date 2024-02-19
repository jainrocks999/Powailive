import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  Animated,
} from 'react-native';
import React from 'react';               
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../components/Responsive';
// import { SlideInRight, SlideOutLeft } from 'react-native-reanimated';
// function App() {
//   return <Animated.View entering={SlideInRight} exiting={SlideOutLeft} />;
// }
componentDidMount = () => {
  Animated.spring(this.state.animatedValue, {
    toValue: 1,
    tension: 20,
    useNativeDriver: true,
  }).start();
};
const Imgs = [
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
const Featured = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'black',
          paddingBottom: 150,
        }}>
        {/* <ImageBackground
        source={require('../../../assets/splash_bg.jpg')}
        style={{width: '100%', height: '100%',}}> */}

        <View
          style={{
            width: '50%',
            height: '6%',
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../../assets/flaticons/three-stars.png')}
            style={{
              width: '60%',
              height: '60%',
              tintColor: 'white',
              margin: hp(5),
            }}></Image>
        </View>
        <View
          style={{
            alignItems: 'center',

            marginBottom: hp(8),
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'red'}}>
            Featured
          </Text>
          <Text style={{fontSize: 18, fontWeight: '400', color: 'white'}}>
            Lorem Ipsum dolor sit
          </Text>
          <Text style={{fontSize: 18, fontWeight: '400', color: 'white'}}>
            amet, consecteture
          </Text>
        </View>
        <Animated.View>
          <View style={{backgroundColor: '#2b2b2b'}}>
            <View style={styles.FeatureContainer}>
              <Text style={styles.Featurecategory}>Live Chat</Text>
            </View>

            <FlatList
              horizontal={true}
              data={Imgs}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              )}
            />
          </View>
        </Animated.View>
        <View style={{backgroundColor: 'black'}}>
          <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}>COVID-19</Text>
          </View>

          <FlatList
            horizontal={true}
            data={Imgs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: '#2b2b2b'}}>
          <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}>Music</Text>
          </View>

          <FlatList
            horizontal={true}
            data={Imgs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: 'black'}}>
          <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}>From Home</Text>
          </View>

          <FlatList
            horizontal={true}
            data={Imgs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: '#2b2b2b'}}>
          <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}>Get Candid</Text>
          </View>

          <FlatList
            horizontal={true}
            data={Imgs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: 'black'}}>
          <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}>Fitness</Text>
          </View>

          <FlatList
            horizontal={true}
            data={Imgs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: '#2b2b2b'}}>
          <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}>For Family</Text>
          </View>

          <FlatList
            horizontal={true}
            data={Imgs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: 'black'}}>
          <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}>Homefood</Text>
          </View>

          <FlatList
            horizontal={true}
            data={Imgs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: '#2b2b2b'}}>
          <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}>Sports</Text>
          </View>

          <FlatList
            horizontal={true}
            data={Imgs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
        <View style={{backgroundColor: 'black'}}>
          <View style={styles.FeatureContainer}>
            <Text style={styles.Featurecategory}>Powai & its people</Text>
          </View>

          <FlatList
            horizontal={true}
            data={Imgs}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Featured;
const styles = StyleSheet.create({
  FeatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,

    height: hp(7),
  },
  Featurecategory: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 10,
  },
  imageContainer: {
    padding: 10,
    paddingHorizontal: 2,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 130,
    resizeMode: 'cover',
  },
  text: {
    width: 200,
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
    fontSize: 12,
  },
});
