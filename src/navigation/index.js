import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Splash from '../screens/Auth/Splash';
import {NavigationContainer} from '@react-navigation/native';
import Forgot from '../screens/Auth/Forget';
import Signup from '../screens/Auth/Signup';
import MyDrawer from './drawer/index';
import Donate from '../components/Donate';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="forgot" component={Forgot} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
