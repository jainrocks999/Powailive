import React from 'react';
import { LogBox } from 'react-native';
// import { Provider } from 'react-redux';
import MyStack from './src/navigation/index';
// import { store } from './src/Redux/Store';


export default function App() {
  LogBox.ignoreAllLogs();
  return (
      <MyStack />
    // <Provider store={store}>
    // </Provider>
   
  );
}
