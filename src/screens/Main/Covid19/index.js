import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    style,
    Image,
  } from 'react-native';
  import React from 'react';
  import Header from '../../../components/Header';
  import Animated, {SlideInDown} from 'react-native-reanimated';
  const Covid19 = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Header />
        <Animated.View entering={SlideInDown} >
        <ImageBackground
          source={require('../../../assets/splash_bg.jpg')}
          style={{height: '100%', width: '100%'}}>
          <View style={{flexDirection: 'row', margin: 50}}>
            <Image
              source={require('../../../assets/flaticons/coronavirus.png')}
              style={{height: 100, width: 100, }}
            />
            <View>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '500',
                  color: 'red',
                  marginHorizontal: 20,
                }}>
                {' '}
                Covid - 19{' '}
              </Text>
               <Text style={{fontSize: 17, color: 'white', marginHorizontal: 20}}>
                {' '}
                Test Desc{' '}
              </Text>
              {/* <Text style={{fontSize: 17, color: 'white', marginHorizontal: 20}}> 
                dummy text of the printing ...{' '}
              </Text>  */}
            </View>
          </View>
        </ImageBackground>
        </Animated.View>
      </SafeAreaView>
    );
  };
  
  export default Covid19;
  
  const styles = StyleSheet.create({});
  