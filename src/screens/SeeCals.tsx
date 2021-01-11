import {View, Text, TextInput, ProgressViewIOSComponent} from "react-native";
import React, { useEffect, useState } from 'react';
import { styles } from "../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { calorieEntry, caloryEntryElementProps } from '../constants/interfaces';
import { getBreakfastCalorieList, getDinnerCalorieList, getLunchCalorieList, getSnacksCalorieList } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteBreakfast, deleteDinner, deleteLunch, deleteSnacks } from "../redux/actions";

export default function SeeCals(props: any){
    let mealName = props.route.params.meal;
    const [calorieList, setCalorieList] = useState<calorieEntry[]>([]);
    let breakfastCalorieList = useSelector(getBreakfastCalorieList);
    let lunchCalorieList = useSelector(getLunchCalorieList);
    let dinnerCalorieList = useSelector(getDinnerCalorieList);
    let snacksCalorieList = useSelector(getSnacksCalorieList);


    useEffect(() => {
        if(mealName == 'breakfast'){ 
           setCalorieList(breakfastCalorieList);
        }
        else if(mealName == 'lunch'){
            setCalorieList(lunchCalorieList)
        }
        else if(mealName == 'dinner'){
            setCalorieList(dinnerCalorieList)
        }
        else if(mealName == 'snacks'){
            setCalorieList(snacksCalorieList)
        }
    }, []);
    
    let mealNameTitle = mealName.charAt(0).toUpperCase() + mealName.slice(1);

    //console.log("claorieList", calorieList);

    return (
        <View style={{flex: 1}}>
            <Text>{mealNameTitle}</Text>
            <View style={styles.caloryEntryElementContainer}>
                <TextInput value={"Calories"} editable={false} selectTextOnFocus={false}/>
                <TextInput value={"Note"}  editable={false} selectTextOnFocus={false}/>
                <TextInput value={"Delete"}  editable={false} selectTextOnFocus={false}/>
            </View>
            
            {calorieList.map(current => 
                {
                    console.log("current", current);
                    return(
                        <CaloryEntryElement
                            food={current}
                            mealName={mealName}
                            key={current.guid}
                        />
                    );
                }
            )}
        </View>
    );
}

export function CaloryEntryElement(props: caloryEntryElementProps){

    const dispatch = useDispatch();

    function onDelete(){
        if(props.mealName == 'breakfast'){
            dispatch(deleteBreakfast(props.food));
        }
        else if(props.mealName == 'lunch'){
            dispatch(deleteLunch);
        }
        else if(props.mealName == 'dinner'){
            dispatch(deleteDinner)
        }
        else if(props.mealName == 'snacks'){
            dispatch(deleteSnacks(props.food))
        }
    }

    return(
        <View style={styles.caloryEntryElementContainer}>
            <TextInput value={props.food.calories.toString()} editable={false} selectTextOnFocus={false}/>
            <TextInput value={props.food.note} editable={false} selectTextOnFocus={false}/>
            <TouchableOpacity><Text>Delete</Text></TouchableOpacity>
        </View>
    );
}