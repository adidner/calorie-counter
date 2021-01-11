import {View, Text, Animated, StyleSheet} from "react-native";
import React from 'react';
import { styles } from '../styles/styles';
import { useSelector } from 'react-redux';
import { getBreakfastCalories, getDinnerCalories, getFridayLimit, getLunchCalories, getMondayLimit, getSaturdayLimit, getSnacksCalories, getSundayLimit, getThursdayLimit, getTotalCalories, getTuesdayLimit, getWednesdayLimit } from "../redux/selectors";
import * as Progress from 'react-native-progress';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Overview(props: any){
    let date = new Date();
    let DayOfTheWeek = date.getDay();

    let caloriesEaten = useSelector(getTotalCalories);
    let caloriesLimitForDayOfWeek = 0;
    if(DayOfTheWeek == 1){
        caloriesLimitForDayOfWeek = useSelector(getMondayLimit);
    }
    else if(DayOfTheWeek == 2){
        caloriesLimitForDayOfWeek = useSelector(getTuesdayLimit);
    }
    else if(DayOfTheWeek == 3){
        caloriesLimitForDayOfWeek = useSelector(getWednesdayLimit);
    }
    else if(DayOfTheWeek == 4){
        caloriesLimitForDayOfWeek = useSelector(getThursdayLimit);
    }
    else if(DayOfTheWeek == 5){
        caloriesLimitForDayOfWeek = useSelector(getFridayLimit);
    }
    else if(DayOfTheWeek == 6){
        caloriesLimitForDayOfWeek = useSelector(getSaturdayLimit);
    }
    else if(DayOfTheWeek == 0){
        caloriesLimitForDayOfWeek = useSelector(getSundayLimit);
    }
    let percentageEaten = caloriesEaten / caloriesLimitForDayOfWeek;
    let caloriesLeft = caloriesLimitForDayOfWeek - caloriesEaten;


    let breakfastCalories = useSelector(getBreakfastCalories);
    let lunchCalories = useSelector(getLunchCalories);
    let dinnerCalories = useSelector(getDinnerCalories);
    let snackCalories = useSelector(getSnacksCalories);


    return (
        <View style={styles.overViewContianer}>
            <View style={styles.dayOfWeekContainer}>
                <View style={ DayOfTheWeek == 1 ? styles.dayOfWeekButtonlit : styles.dayOfWeekButtonUnlit}><Text>Mon</Text></View>
                <View style={ DayOfTheWeek == 2 ? styles.dayOfWeekButtonlit : styles.dayOfWeekButtonUnlit}><Text>Tue</Text></View>
                <View style={ DayOfTheWeek == 3 ? styles.dayOfWeekButtonlit : styles.dayOfWeekButtonUnlit}><Text>Wed</Text></View>
                <View style={ DayOfTheWeek == 4 ? styles.dayOfWeekButtonlit : styles.dayOfWeekButtonUnlit}><Text>Thu</Text></View>
                <View style={ DayOfTheWeek == 5 ? styles.dayOfWeekButtonlit : styles.dayOfWeekButtonUnlit}><Text>Fri</Text></View>
                <View style={ DayOfTheWeek == 6 ? styles.dayOfWeekButtonlit : styles.dayOfWeekButtonUnlit}><Text>Sat</Text></View>
                <View style={ DayOfTheWeek == 0 ? styles.dayOfWeekButtonlit : styles.dayOfWeekButtonUnlit}><Text>Sun</Text></View>
            </View>
            
            <View style={styles.progressBarContainer}>
                <Text style={styles.mealText}>Calories Left: {caloriesLeft}</Text>
                <Progress.Bar progress={percentageEaten} width={300} height={40} />
            </View>

            <View style={styles.mealContianer}>
                <TouchableOpacity style={styles.mealRow}>
                    <Text style={styles.mealText}>Breakfast</Text>
                    <Text style={styles.mealText}>{breakfastCalories}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mealRow}>
                    <Text style={styles.mealText}>Lunch</Text>
                    <Text style={styles.mealText}>{lunchCalories}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mealRow}>
                    <Text style={styles.mealText}>Dinner</Text>
                    <Text style={styles.mealText}>{dinnerCalories}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mealRow}>
                    <Text style={styles.mealText}>Snacks</Text>
                    <Text style={styles.mealText}>{snackCalories}</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.addCaloriesContainer}>
                <TouchableOpacity onPress={() => {props.navigation.navigate('AddCal');}} style={styles.addCaloriesButton}><Text style={styles.mealText}>Add Calories</Text></TouchableOpacity>
            </View>
        </View>
    );
}