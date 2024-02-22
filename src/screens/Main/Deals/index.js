import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../components/Responsive';

const Deals = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View>
          <Image source={require('../../../assets/sliderimg/img1.jpg')} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginHorizontal: '10%',
            padding: '3%',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{tintColor: 'white', height: 30, width: 30}}
              source={require('../../../assets/flaticons/plus.png')}
            />
            <Text style={{fontSize: 15, color: 'white', marginTop: 5}}>
           
              My List
            </Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <Image
              style={{tintColor: 'white', height: 30, width: 30}}
              source={require('../../../assets/flaticons/share.png')}
            />

            <Text style={{fontSize: 15, color: 'white', marginTop: 5}}>
          
              Share
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text style={{color: 'white', fontSize: 22, fontWeight: '600'}}>
            
            About
          </Text>
          <TouchableOpacity>
            <Image
              style={{height: hp(3), width: hp(3), marginHorizontal: 10}}
              source={require('../../../assets/floaticon/Facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{height: hp(3), width: hp(3)}}
              source={require('../../../assets/floaticon/Instagram.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: '3%', marginLeft: 20}}>
          <Text style={{color: 'white', fontSize: 15}}>
       
            Mirchi & Mime serves modern indian cuisine.
          </Text>
        </View>
        <View style={{marginTop: '3%', marginLeft: 20}}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>
      
            Age Limits :
          </Text>
        </View>
        <View style={{marginTop: '3%', marginLeft: 20, flexDirection: 'row'}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
          
            Day
          </Text>
          <Text style={{color: 'white', fontSize: 15}}>
       
            : Monday - Sunday
          </Text>
        </View>
        <View style={{marginTop: '3%', marginLeft: 20, flexDirection: 'row'}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
       
            Hours
          </Text>
          <Text style={{color: 'white', fontSize: 15}}>
          
            : 11:00am - 11:00pm
          </Text>
        </View>
        <View style={{marginTop: '3%', marginLeft: 20, flexDirection: 'row'}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
          
            Contact
          </Text>
          <Text style={{color: 'white', fontSize: 15}}> : 7868919191 </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 20,

            marginTop: 30,
          }}>
          <Text style={{color: 'white', fontSize: 22, fontWeight: '600'}}>
            Images
          </Text>
          <Image
            source={require('../../../assets/default.png')}
            style={{height: 120, width: 120, marginTop: 10}}
          />
        </View>
        <View style={{flexDirection: 'column', marginLeft: 20, marginTop: 30}}>
          <Text style={{color: 'white', fontSize: 22, fontWeight: '600'}}>
            Upcoming Events
          </Text>
          <Text style={{marginTop: 10, color: 'white', fontSize: 15}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Deals;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
  },
});
