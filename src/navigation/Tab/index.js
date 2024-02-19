import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TouchableOpacity, View, Image} from 'react-native';
import Header from '../../components/Header/index';
import Brandconnect from '../../screens/Main/Brandconnect/index';
import Featured from '../../screens/Main/Featured/index';
import Home from '../../screens/Main/Home/index';
import Favorites from '../../screens/Main/Favorites';
import floatdata from '../../components/floatdata';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../components/Responsive';

import Donate from '../../components/Donate';
import FloatingButton from '../../components/floatactionbutton';
const Tab = createMaterialTopTabNavigator();
function MyTabs() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarStyle: {backgroundColor: 'black'},
          tabBarLabelStyle: {
            fontSize: 18,
            color: 'white',
            borderEndColor: 'black',
          },
          tabBarItemStyle: {width: 'auto'},
          tabBarIndicatorStyle: {backgroundColor: 'red'},
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Brand connect" component={Brandconnect} />
        
        <Tab.Screen name="Featured" component={Featured} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
      <FloatingButton/>
    </View>
  );
}
export default MyTabs;
