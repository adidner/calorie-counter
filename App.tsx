import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddCal from './src/screens/AddCal';
import Overview from './src/screens/Overview';
import SeeCals from './src/screens/SeeCals';
import Stats from './src/screens/Stats';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './src/redux/store';
import { Provider } from 'react-redux';


const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Overview">
          <Stack.Screen name="AddCal" component={AddCal} />
          <Stack.Screen name="Stats" component={Stats} />
          <Stack.Screen name="SeeCals" component={SeeCals} />
          <Stack.Screen name="Overview" component={Overview} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
