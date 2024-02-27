import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import MyStack from './src/navigation/index';
import store from './src/Redux/store';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
   
  );
}
