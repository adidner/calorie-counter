export interface calorieEntry{
    calories: number;
    note: string;
    guid: string;
}

export interface reduxState{
    breakFastCalorieList: calorieEntry[]; 
    lunchCalorieList: calorieEntry[];
    dinnerCalorieList: calorieEntry[];
    snacksCalorieList: calorieEntry[];
    mondayLimit: number;
    tuesdayLimit: number;
    wednesdayLimit: number;
    thursdayLimit: number;
    fridayLimit: number;
    staurdayLimit: number;
    sundayLimit: number;
    weight: number;
    height: number;
    dateOfBirth: string;
    age: number;
    goalWeight: number;
}

export interface dailyLimits{
    
}

export interface stats{
    weight: number;
    height: number;
    dateOfBirth: string;
    age: number;
    goalWeight: number;
}