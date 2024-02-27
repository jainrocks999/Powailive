import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import MyTab from "../bottumtab";
import TopBarNavigator from '../Tab/index';

import CostumDrawer from '../../components/Costumdrawer';
import Home from '../../screens/Main/Home/index';
import Donate from '../../components/Donate';
import Deals from '../../screens/Main/Deals';
import Tiffinservice from '../../screens/Main/Tiffinservice';
import Medicalstore from '../../screens/Main/Medical store';
import Grocery from '../../screens/Main/Grocery shop';
import Restaurant from '../../screens/Main/Restaurant';
import Covid19 from '../../screens/Main/Covid19';
import FloatingButton from '../../components/floatactionbutton';
import Profile from '../../screens/Main/Profile';
import Contact from '../../screens/Main/Contactus';

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <View style={{flex: 1}}>
    <Drawer.Navigator
      drawerContent={pros => <CostumDrawer {...pros} />}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="home" component={TopBarNavigator}/>
      <Drawer.Screen name="Donate" component={Donate}/>
      <Drawer.Screen name="deals" component={Deals}/>
      <Drawer.Screen name="tiffin" component={Tiffinservice}/>
      <Drawer.Screen name="medical" component={Medicalstore}/>
      <Drawer.Screen name="grocery" component={Grocery}/>
      <Drawer.Screen name="restaurant" component={Restaurant}/>
      <Drawer.Screen name="Covid" component={Covid19}/>
      <Drawer.Screen name="profile" component={Profile}/>
      <Drawer.Screen name="contact" component={Contact}/>
      
     
    

    </Drawer.Navigator>
    <FloatingButton/>
    </View>
  );
};
export default MyDrawer;
