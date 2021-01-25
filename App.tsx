import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddCal from './src/screens/AddCal';
import Overview from './src/screens/Overview';
import SeeCals from './src/screens/SeeCals';
import Stats from './src/screens/Stats';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import getStore from './src/redux/store';
import { Provider } from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";


const Stack = createStackNavigator();


export default function App() {

  const storeObj = getStore();
  const store = storeObj.store;
  const persistor = storeObj.persistor;
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Overview">
            <Stack.Screen name="AddCal" component={AddCal} />
            <Stack.Screen name="Stats" component={Stats} />
            <Stack.Screen name="SeeCals" component={SeeCals} />
            <Stack.Screen name="Overview" component={Overview} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
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
