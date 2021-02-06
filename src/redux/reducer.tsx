import {actionInterface, APPEND_BREAKFAST, APPEND_DINNER, APPEND_LUNCH, APPEND_SNACKS, DELETE_BREAKFAST, DELETE_DINNER, DELETE_LUNCH, DELETE_SNACKS, OVERRIDE_STATE} from './actions';
import {reduxState} from '../constants/interfaces';
import { createGuid } from '../Utils';
import { REHYDRATE } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';


const initialState: reduxState = {
    //breakFastCalorieList: [{calories: 20, note: "hi", guid:createGuid() },{calories: 80, note: "hello", guid:createGuid() },{calories: 69420, note: "tihi", guid:createGuid() }], //for testing
    breakFastCalorieList: [], 
    lunchCalorieList: [],
    dinnerCalorieList: [],
    //snacksCalorieList: [{calories: 505, note:"cornbeef", guid:createGuid()}], //for testing
    snacksCalorieList: [],
    mondayLimit: 2300,
    tuesdayLimit: 2300,
    wednesdayLimit: 2300,
    thursdayLimit: 2300,
    fridayLimit: 2450,
    staurdayLimit: 2450,
    sundayLimit: 2300,
    weight: 162,
    height: 175,
    dateOfBirth: "11/29/1997",
    age: 23,
    goalWeight: 160,
};
  
  export default function rootReducer(state = initialState, action: actionInterface) {
    switch (action.type){
        case REHYDRATE:
            console.log("rehydrate action", action);
        case APPEND_LUNCH:
            let newLunchList = state.lunchCalorieList;
            newLunchList.push(action.value);
            saveToAsync(state);
            return Object.assign({}, state, {
                lunchCalorieList: newLunchList
            })
        case APPEND_BREAKFAST:
            let newBreakfastList = state.breakFastCalorieList;
            newBreakfastList.push(action.value);
            saveToAsync(state);
            return Object.assign({}, state, {
                breakFastCalorieList: newBreakfastList
            })
        case APPEND_DINNER:
            let newDinnerList = state.dinnerCalorieList;
            newDinnerList.push(action.value);
            saveToAsync(state);
            return Object.assign({}, state, {
                dinnerCalorieList: newDinnerList
            })
        case APPEND_SNACKS:
            let newSnackList = state.snacksCalorieList;
            newSnackList.push(action.value);
            saveToAsync(state);
            return Object.assign({}, state, {
                snacksCalorieList: newSnackList
            })
        
        case DELETE_LUNCH:
            let newLunchCalorieList = state.lunchCalorieList.filter((currentValue) => !(currentValue.guid == action.value.guid));
            saveToAsync(state);
            return Object.assign({}, state, {
                lunchCalorieList: newLunchCalorieList
            })
        case DELETE_BREAKFAST:
            console.log("delete breakfast", action.value);
            let newBreakfastCalorieList = Array.from(state.breakFastCalorieList);
            newBreakfastCalorieList = newBreakfastCalorieList.filter((currentValue) => !(currentValue.guid == action.value.guid));
            saveToAsync(state);
            return Object.assign({}, state, {
                breakFastCalorieList: newBreakfastCalorieList
            })
        case DELETE_DINNER:
            let newDinnerCalorieList = state.dinnerCalorieList.filter((currentValue) => !(currentValue.guid == action.value.guid));
            saveToAsync(state);
            return Object.assign({}, state, {
                dinnerCalorieList: newDinnerCalorieList
            })
        case DELETE_SNACKS:
            let newSnacksCalorieList = state.snacksCalorieList.filter((currentValue) => !(currentValue.guid == action.value.guid));
            saveToAsync(state);
            return Object.assign({}, state, {
                snacksCalorieList: newSnacksCalorieList
            })
        
        default:
            return state;
    }
  }
  
 
  function saveToAsync(state: any){
    //beause https://github.com/rt2zz/redux-persist/issues/1164
    const saveState = {
        breakFastCalorieList: JSON.stringify(state.breakFastCalorieList),
        lunchCalorieList: JSON.stringify(state.lunchCalorieList),
        dinnerCalorieList: JSON.stringify(state.dinnerCalorieList),
        snacksCalorieList: JSON.stringify(state.snacksCalorieList),
    }
    console.log("saveState", JSON.stringify(saveState));
    AsyncStorage.setItem('persist:primary', JSON.stringify(saveState));
  }