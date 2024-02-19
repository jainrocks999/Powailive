import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import MyTab from "../bottumtab";
import TopBarNavigator from '../Tab/index';

import CostumDrawer from '../../components/Costumdrawer';
import Home from '../../screens/Main/Home/index';
import Donate from '../../components/Donate';
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={pros => <CostumDrawer {...pros} />}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="home" component={TopBarNavigator} />
      <Drawer.Screen name="Donate" component={Donate} />

    </Drawer.Navigator>
  );
};
export default MyDrawer;