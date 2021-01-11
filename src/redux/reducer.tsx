import {actionInterface, APPEND_BREAKFAST, APPEND_DINNER, APPEND_LUNCH, APPEND_SNACKS, DELETE_BREAKFAST, DELETE_DINNER, DELETE_LUNCH, DELETE_SNACKS} from './actions';
import {reduxState} from '../constants/interfaces';
import { createGuid } from '../Utils';
  
const initialState: reduxState = {
    breakFastCalorieList: [{calories: 20, note: "hi", guid:createGuid() }], 
    lunchCalorieList: [],
    dinnerCalorieList: [],
    snacksCalorieList: [{calories: 505, note:"cornbeef", guid:createGuid()}],
    mondayLimit: 2200,
    tuesdayLimit: 2200,
    wednesdayLimit: 2200,
    thursdayLimit: 2200,
    fridayLimit: 2300,
    staurdayLimit: 2500,
    sundayLimit: 2300,
    weight: 162,
    height: 175,
    dateOfBirth: "11/29/1997",
    age: 23,
    goalWeight: 155,
};
  
  export default function rootReducer(state = initialState, action: actionInterface) {
    switch (action.type){
        case APPEND_LUNCH:
            let newLunchList = state.lunchCalorieList;
            newLunchList.push(action.value);
            return Object.assign({}, state, {
                lunchCalorieList: newLunchList
            })
        case APPEND_BREAKFAST:
            let newBreakfastList = state.breakFastCalorieList;
            newBreakfastList.push(action.value);
            return Object.assign({}, state, {
                breakFastCalorieList: newBreakfastList
            })
        case APPEND_DINNER:
            let newDinnerList = state.dinnerCalorieList;
            newDinnerList.push(action.value);
            return Object.assign({}, state, {
                dinnerCalorieList: newDinnerList
            })
        case APPEND_SNACKS:
            let newSnackList = state.snacksCalorieList;
            newSnackList.push(action.value);
            return Object.assign({}, state, {
                snacksCalorieList: newSnackList
            })
        
        case DELETE_LUNCH:
            let newLunchCalorieList = state.lunchCalorieList.filter((currentValue) => !(currentValue.guid == action.value.guid));
            return Object.assign({}, state, {
                lunchCalorieList: newLunchCalorieList
            })
        case DELETE_BREAKFAST:
            let newBreakfastCalorieList = state.breakFastCalorieList.filter((currentValue) => !(currentValue.guid == action.value.guid));
            return Object.assign({}, state, {
                breakFastCalorieList: newBreakfastCalorieList
            })
        case DELETE_DINNER:
            let newDinnerCalorieList = state.dinnerCalorieList.filter((currentValue) => !(currentValue.guid == action.value.guid));
            return Object.assign({}, state, {
                dinnerCalorieList: newDinnerCalorieList
            })
        case DELETE_SNACKS:
            let newSnacksCalorieList = state.snacksCalorieList.filter((currentValue) => !(currentValue.guid == action.value.guid));
            return Object.assign({}, state, {
                snacksCalorieList: newSnacksCalorieList
            })
        
        default:
            return state;
    }
  }
  
 
  