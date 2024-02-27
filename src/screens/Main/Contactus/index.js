import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../components/Responsive';
import Animated, {  SlideInDown, SlideInUp } from 'react-native-reanimated';

const Img = [
  {
    id: '1',
    image: require('../../../assets/flaticons/MAIL.png'),
    title:
      'For adding your buisness to poewi live app or for any other promotions ',
    email: 'powailive @gmail.com',
  },
  {
    id: '2',
    image: require('../../../assets/flaticons/whatsAPP.png'),
    title: 'For reaching out to our associates at our earliest',
    email: 'Whatsapp us at.wa.link/pkugw0',
  },
  {
    id: '3',
    image: require('../../../assets/flaticons/Contact.png'),
    title: 'For enslisting events',
    email: 'powailive @gmail.com',
  },
];
const Contact = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f2f2f2',
        height: '100%',
        width: '100%',
      }}>
      <Header />
      <Animated.View entering={SlideInDown} >
      <FlatList
        horizontal={false}
        data={Img}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View style={styles.imageContainer}>
            <Image
              source={item.image}
              style={[styles.image, index == 1 ? {right: 10} : null]}
            />
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.textt}>{item.email}</Text>
          </View>
        )}
      />
      <View
        style={{
          marginBottom: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'grey', fontSize: 20, fontWeight: '600'}}>
          {' '}
          Thanks for reaching out to us.
        </Text>
      </View>
      </Animated.View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'white',
    height: hp(20),
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 5,
    marginVertical: hp(3),
  },
  image: {
    width: hp(12),
    height: hp(12),
    marginHorizontal: 20,
    resizeMode: 'stretch',
    position: 'absolute',
  },
  text: {
    width: wp(70),
    marginTop: 10,
    marginLeft: '20%',
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  textt: {
    width: wp(70),

    marginLeft: '20%',
    color: 'red',
    fontSize: 15,
    fontWeight: '600',
  },
});
