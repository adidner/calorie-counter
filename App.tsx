import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddCal from './src/screens/AddCal';
import Overview from './src/screens/Overview';
import SeeCals from './src/screens/SeeCals';
import Stats from './src/screens/Stats';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './src/redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { getState } from './src/redux/selectors';
import { overrideState } from './src/redux/actions';


const Stack = createStackNavigator();


export default function App() {

  //TODO fix

  // let date = new Date();
  // let formattedDate = (date.getMonth() + 1).toString() + date.getDate().toString() + date.getFullYear().toString();

  // let dateState = useSelector(getState);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem(formattedDate)
  //       if(value !== null) {
  //         let previousState = JSON.parse(value);
  //         dispatch(overrideState(previousState))
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };



  //   const saveData = async () => {
  //     try {
  //       await AsyncStorage.setItem(formattedDate, JSON.stringify(dateState))
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
    
  //   return () => {saveData()};
      
  // }, []); 

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
