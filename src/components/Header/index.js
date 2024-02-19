import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../components/Responsive';
import {useNavigation, StackActions} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{width: '100%', backgroundColor: 'black'}}>
      <View style={[styles.container]}>
        <TouchableOpacity   onPress={() => navigation.openDrawer()}>
        <Image
          source={require('../../assets/flaticons/3.png')}
        
          style={{
            height: hp(3),
            width: hp(3),
            marginLeft: wp(5),
          }}
        />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
