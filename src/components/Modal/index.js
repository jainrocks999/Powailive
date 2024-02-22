import {View, Text, Modal, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {heightPercent as hp, widthPrecent as wp} from '../Responsive';
import { useNavigation } from '@react-navigation/native';

const MyModal = ({visible, onPress}) => {
    const navigation = useNavigation();
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(52, 52, 52, .9)'
         
        }}
        onPress={() => onPress(!visible)}>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Image
            style={{height: '50%', width: '100%'}}
            source={require('../../assets/sliderimg/img1.jpg')}
          />
          <TouchableOpacity    onPress={() => {
            navigation.navigate('deals');
          }} >
          <View style={styles.titleContainer}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
              borderWidth: 2,
              padding:4,
              borderRadius: 50,
              borderColor: 'white',
              paddingHorizontal: '30%',
            }}>
            {' '}
        View Store
          </Text>
        </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MyModal;
const styles = StyleSheet.create({
   
    titleContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      height: hp(8),
    },
  });
