import React, { useState} from "react";
import { View, TouchableOpacity, StyleSheet, Animated ,Image} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../components/Responsive';

const FloatingButton = () => {

  const [icon_1] = useState(new Animated.Value(40));
  const [icon_2] = useState(new Animated.Value(40));
  const [icon_3] = useState(new Animated.Value(40));
  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(icon_1, {
      toValue: 130,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 200,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 280,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 40,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 40,
      duration: 100,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 40,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }
  return(
    <View style={{
    }}>
      <Animated.View style={[styles.circle2, { bottom: icon_1}]}>
        <TouchableOpacity>
        <Image  style={{ height: hp(5), width:hp(5)}}source={require('../assets/floaticon/Facebook.png')}/> 
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle2, { bottom: icon_2, }]}>
        <TouchableOpacity>
        <Image  style={{ height: hp(5), width:hp(5)}}source={require('../assets/floaticon/Instagram.png')}/> 
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.circle2, { bottom: icon_3,}]}>
        <TouchableOpacity>
        <Image  style={{ height: hp(7), width:hp(7)}}source={require('../assets/floaticon/Youtube.png')}/>
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity
     style={styles.circle}
    onPress={() => {
    pop === false ? popIn() : popOut();
  }}
>
  <AntDesign name={pop ? "down" : "up"} size={25} color='black'  />
</TouchableOpacity>
    </View>
  )
}
export default FloatingButton;

const styles = StyleSheet.create({
  circle: {
     backgroundColor: 'white',
     width: hp(6),
     height: hp(6),
     position: 'absolute',
     bottom: 60,
     right: 40,
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
  },
  circle2: {
     width: hp(6),
     height: hp(10.8),
     position: 'absolute',
     bottom: 60,
     right: 40,
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
  }
})
