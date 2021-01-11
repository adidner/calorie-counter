import {View, TextInput, TouchableOpacity, Text} from "react-native";
import React, {useState} from 'react';
import { styles } from "../styles/styles";
import { calorieEntry } from "../constants/interfaces";
import { createGuid } from "../Utils";
import { useDispatch } from "react-redux";
import { appendBreakfast, appendDinner, appendLunch, appendSnacks } from "../redux/actions";

export default function AddCal(props: any){
    const [calories, setCalories] = useState("");
    const [note, setNote] = useState("");
    const [selectedMeal, setSelectedMeal] = useState<"breakfast" | "dinner" | "lunch" | "snacks">("breakfast");

    const dispatch = useDispatch();

    function addCals(){
        let newCals: calorieEntry = {
            calories: Number(calories),
            note: note,
            guid: createGuid(),
        }
        if(selectedMeal == "breakfast"){
            dispatch(appendBreakfast(newCals));
        }
        else if(selectedMeal == "dinner"){
            dispatch(appendDinner(newCals));
        }
        else if(selectedMeal == "lunch"){
            dispatch(appendLunch(newCals));
        }
        else if(selectedMeal == "snacks"){
            dispatch(appendSnacks(newCals))
        }
        props.navigation.navigate('Overview');
    }

    return (
        <View style={styles.addCalContainer}>
            <View style={styles.addCalTopContianer}>
                <TextInput
                    onChangeText={text => setCalories(text)}
                    value={calories}
                    keyboardType='numeric'
                    placeholder="Calories"
                    style={styles.inputCaloriesAddCal}
                />
                <TouchableOpacity style={styles.addCaloriesButton} onPress={() => addCals()}><Text style={styles.mealText}>Add Calories</Text></TouchableOpacity>
            </View>

            <View style={styles.mealButtonGroupContainer}>
                <TouchableOpacity onPress={() => setSelectedMeal("breakfast")} style={selectedMeal == "breakfast" ? styles.highlitMeal : styles.unHighlitMeal }>
                    <Text style={styles.mealButtonGroupText}>Breakfast</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedMeal("lunch")} style={selectedMeal == "lunch" ? styles.highlitMeal : styles.unHighlitMeal }>
                    <Text style={styles.mealButtonGroupText}>Lunch</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedMeal("dinner")} style={selectedMeal == "dinner" ? styles.highlitMeal : styles.unHighlitMeal }>
                    <Text style={styles.mealButtonGroupText}>Dinner</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedMeal("snacks")} style={selectedMeal == "snacks" ? styles.highlitMeal : styles.unHighlitMeal }>
                    <Text style={styles.mealButtonGroupText}>Snacks</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                onChangeText={text => setNote(text)}
                value={note}
                placeholder="Note"
                style={styles.inputNoteAddCal}
            />

        </View>
    );
}