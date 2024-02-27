import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Check from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../components/Responsive';

import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CostumDrawer = props => {
  const navigation = useNavigation();
  //e6f0f2
  return (
    <View Style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingVertical: '15%'}}>
        <View style={[styles.DrawerItem]}>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({index: 0, routes: [{name: 'home'}]})
            }>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                alignItems: 'center',

                width: '60%',
              }}>
              <Image
                style={{
                  tintColor: 'black',
                  height: hp(3),
                  width: hp(3),
                  marginLeft: '40%',
                }}
                source={require('../../assets/flaticons/home.png')}></Image>

              <Text
                style={{
                  fontSize: wp(5),
                  color: 'black',
                }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.7,
            width: '80%',
            alignSelf: 'center',
            borderBottomColor: 'black',
          }}></View>
        <View style={[styles.DrawerItem]}>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                alignItems: 'center',
                width: '64%',
              }}>
              <Image
                style={{
                  tintColor: 'black',
                  height: hp(4),
                  width: hp(4),
                  marginLeft: '36%',
                }}
                source={require('../../assets/flaticons/plus.png')}></Image>

              <Text
                style={{
                  fontSize: wp(5),
                  color: 'black',
                }}>
                My List
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.DrawerItem]}>
          <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
            <View style={{backgroundColor: '#ad1a1a'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: '100%',
                  alignItems: 'center',

                  width: '64%',
                }}>
                <Image
                  style={{
                    tintColor: 'white',
                    height: hp(4),
                    width: hp(4),
                    marginLeft: '36%',
                  }}
                  source={require('../../assets/flaticons/box.png')}></Image>
                <Text
                  style={{
                    fontSize: wp(5),

                    color: 'white',
                  }}>
                  Donate
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.DrawerItem]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: '100%',
              alignItems: 'center',

              width: '65%',
            }}>
            <Image
              style={{
                tintColor: 'black',
                height: hp(4),
                width: hp(4),
                marginLeft: '38%',
              }}
              source={require('../../assets/flaticons/pluss.png')}></Image>
            <Text
              style={{
                fontSize: wp(5),

                color: 'black',
              }}>
              #JustIn
            </Text>
          </View>
        </View>
        <View
          style={{
            borderWidth: 0.7,
            width: '80%',
            alignSelf: 'center',
            borderBottomColor: 'black',
          }}></View>
        <View style={[styles.DrawerItem]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Brand connect')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                alignItems: 'center',

                width: '70%',
              }}>
              <Image
                style={{
                  tintColor: 'black',
                  height: hp(3),
                  width: hp(3),
                  marginLeft: '37%',
                }}
                source={require('../../assets/flaticons/shop.png')}></Image>
              <Text
                style={{
                  fontSize: wp(5),
                  margin: '8%',
                  color: 'black',
                }}>
                Brand Connect
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.7,
            width: '80%',
            alignSelf: 'center',
            borderBottomColor: 'black',
          }}></View>
        <View style={[styles.DrawerItem]}>
          <TouchableOpacity onPress={() => navigation.navigate('Featured')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                alignItems: 'center',

                width: '70%',
              }}>
              <Image
                style={{
                  tintColor: 'black',
                  height: hp(4),
                  width: hp(4),
                  marginLeft: '37%',
                }}
                source={require('../../assets/flaticons/three-stars.png')}></Image>
              <Text
                style={{
                  fontSize: wp(5),

                  color: 'black',
                }}>
                Featured
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 0.7,
              width: '80%',
              alignSelf: 'center',
              borderBottomColor: 'black',
            }}></View>
        </View>
        <View style={[styles.DrawerItem]}>
          <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
            <View
              style={{
                flexDirection: 'row',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '72%',
              }}>
              <Image
                style={{
                  tintColor: 'black',
                  height: hp(4),
                  width: hp(4),
                  marginLeft: '36%',
                }}
                source={require('../../assets/flaticons/heart.png')}></Image>
              <Text
                style={{
                  fontSize: wp(5),
                  color: 'black',
                }}>
                Favorites
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.7,
            width: '80%',
            alignSelf: 'center',
            borderBottomColor: 'black',
          }}></View>
        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
          <View style={[styles.DrawerItem]}>
            <View
              style={{
                flexDirection: 'row',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '63%',
              }}>
              <Image
                style={{
                  tintColor: 'black',
                  height: hp(3.5),
                  width: hp(3.5),
                  marginLeft: '43%',
                }}
                source={require('../../assets/flaticons/Profile.png')}></Image>
              <Text
                style={{
                  fontSize: wp(5),

                  color: 'black',
                }}>
                Profile
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 0.7,
            width: '80%',
            alignSelf: 'center',
            borderBottomColor: 'black',
          }}></View>
          <TouchableOpacity onPress={() => navigation.navigate('contact')}>
        <View style={[styles.DrawerItem]}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '71%',
            }}>
            <Image
              style={{
                tintColor: 'black',
                height: hp(3.5),
                width: hp(3.5),
                marginLeft: '40%',
              }}
              source={require('../../assets/flaticons/contact-us.png')}></Image>
            <Text
              style={{
                fontSize: wp(5),
                margin: '6%',
                color: 'black',
                
              }}>
              Contact Us
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 0.7,
            width: '80%',
            alignSelf: 'center',
            borderBottomColor: 'black',
            marginTop:'40%'
            
          }}></View>
        <View style={[styles.DrawerItem]}>
          <View
            style={{
              flexDirection: 'row',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '67%',
            }}>
            <Image
              style={{
                tintColor: 'black',
                height: hp(3.5),
                width: hp(3.5),
                marginLeft: '40%',
              }}
              source={require('../../assets/flaticons/log-out.png')}></Image>
            <Text
              onPress={() => navigation.navigate('login')}
              style={{
                fontSize: wp(5),
                fontWeight: '500',

                color: 'black',
              }}>
              Logout
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CostumDrawer;
const styles = StyleSheet.create({
  dp: {
    height: hp(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Platform.OS === 'ios' ? '75%' : '65%',
  },
  img: {
    height: wp(22),
    width: wp(22),
    borderRadius: wp(5.5),
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  name: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  DrawerItem: {
    height: hp(7),
    borderBottomColor: 'black',
  },
  terms: {
    fontSize: wp(4),
    fontWeight: '500',
    color: 'white',
    paddingVertical: wp(1),
  },
});
