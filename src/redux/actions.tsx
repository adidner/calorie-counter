import {calorieEntry} from '../constants/interfaces';

export interface actionInterface{
    type: string;
    value: calorieEntry;
}


export const APPEND_LUNCH = "APPEND_LUNCH";
export const APPEND_BREAKFAST = "APPEND_BREAKFAST";
export const APPEND_DINNER = "APPEND_DINNER";
export const APPEND_SNACKS = "APPEND_SNACKS";
export const DELETE_LUNCH = "DELETE_LUNCH";
export const DELETE_BREAKFAST = "DELETE_BREAKFAST";
export const DELETE_DINNER = "DELETE_DINNER";
export const DELETE_SNACKS = "DELETE_SNACKS";

export function appendLunch(value: calorieEntry){
    return {type: APPEND_LUNCH, value: value}
}

export function appendBreakfast(value: calorieEntry){
    return {type: APPEND_BREAKFAST, value: value}
}

export function appendDinner(value: calorieEntry){
    return {type: APPEND_DINNER, value: value}
}

export function appendSnacks(value: calorieEntry){
    return {type: APPEND_SNACKS, value: value}
}


export function deleteLunch(value: calorieEntry){
    return {type: DELETE_LUNCH, value: value}
}

export function deleteBreakfast(value: calorieEntry){
    return {type: DELETE_BREAKFAST, value: value}
}

export function deleteDinner(value: calorieEntry){
    return {type: DELETE_DINNER, value: value}
}

export function deleteSnacks(value: calorieEntry){
    return {type: DELETE_SNACKS, value: value}
}



