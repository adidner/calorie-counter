import { reduxState, stats } from "../constants/interfaces";

export function getBreakfastCalorieList(state: reduxState){
    return state.breakFastCalorieList;
}

export function getDinnerCalorieList(state: reduxState){
    return state.dinnerCalorieList;
}

export function getSnacksCalorieList(state: reduxState){
    return state.snacksCalorieList;
}

export function getLunchCalorieList(state: reduxState){
    return state.lunchCalorieList;
}



export function getLunchCalories(state: reduxState): number{
    let runningTotal = 0;    
    for (let current of state.lunchCalorieList){
        runningTotal += current.calories;
    }
    return runningTotal;
}

export function getBreakfastCalories(state: reduxState): number{
    let runningTotal = 0;    
    for (let current of state.breakFastCalorieList){
        runningTotal += current.calories;
    }
    return runningTotal;
}

export function getDinnerCalories(state: reduxState): number{
    let runningTotal = 0;    
    for (let current of state.dinnerCalorieList){
        runningTotal += current.calories;
    }
    return runningTotal;
}

export function getSnacksCalories(state: reduxState): number{
    let runningTotal = 0;    
    for (let current of state.snacksCalorieList){
        runningTotal += current.calories;
    }
    return runningTotal;
}


export function getTotalCalories(state: reduxState): number{
    let runningTotal: number = 0;
    if(state.lunchCalorieList.length > 0){
        for (let current of state.lunchCalorieList){
            runningTotal += current.calories;
        }
    }
    if(state.breakFastCalorieList.length > 0){
        for (let current of state.breakFastCalorieList){
            runningTotal += current.calories;
        }
    }
    if(state.dinnerCalorieList.length > 0){
        for (let current of state.dinnerCalorieList){
            runningTotal += current.calories;
        }
    }
    if(state.snacksCalorieList.length > 0){
        for (let current of state.snacksCalorieList){
            runningTotal += current.calories;
        }
    }
    return runningTotal;
}

export function getMondayLimit(state: reduxState){
    return state.mondayLimit;
}

export function getTuesdayLimit(state: reduxState){
    return state.tuesdayLimit;
}

export function getWednesdayLimit(state: reduxState){
    return state.wednesdayLimit;
}

export function getThursdayLimit(state: reduxState){
    return state.thursdayLimit;
}

export function getFridayLimit(state: reduxState){
    return state.fridayLimit;
}

export function getSaturdayLimit(state: reduxState){
    return state.staurdayLimit;
}

export function getSundayLimit(state: reduxState){
    return state.sundayLimit;
}


export function getStats(state: reduxState): stats{
    return {
        weight: state.weight,
        height: state.height,
        dateOfBirth: state.dateOfBirth,
        age: state.age,
        goalWeight: state.goalWeight,
    };
}

export function getState(state: reduxState){
    return state;
}



