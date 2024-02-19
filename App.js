import React from 'react';
import {View, Text, LogBox} from 'react-native';
import Splash from './src/screens/Auth/Splash';
import Login from './src/screens/Auth/Login';
import MyStack from './src/navigation/index';
import { NavigationContainer } from '@react-navigation/native'
import MyTabs from './src/components/CustomTab/index';
import TopBarNavigator from './src/navigation/Tab/index';

export default function App() {
    LogBox.ignoreAllLogs()
return(

    <MyStack/>

)
}
