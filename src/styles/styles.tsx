
import {StyleSheet,} from 'react-native';
import {ButtonColor, DayOfWeekHighlight} from '../constants/colors';

const titleFontSize: number = 26;
const normalFontSize: number = 18;

export const styles = StyleSheet.create({
    
    overViewContianer:{
        paddingVertical: 40,
        paddingHorizontal: 10,
        flex: 1,
        alignItems: 'center'
    },
    
    dayOfWeekContainer: {
        // backgroundColor: 'purple',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'flex-start'
    },
    dayOfWeekButtonUnlit:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10, 
        paddingVertical: 14,
        backgroundColor:'white'
    },
    dayOfWeekButtonlit:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10, 
        paddingVertical: 14,
        backgroundColor: 'green',
    },

    progressBarContainer:{
        // backgroundColor: 'pink',
        flex: 1, alignItems: 'center'
    },

    mealContianer:{
        flex: 1.3,
        alignSelf: "stretch",
        paddingHorizontal: 20,
        // backgroundColor: 'green',
    },

   mealRow:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginVertical: 5,
   },

   mealText:{
     fontSize: 20,
   },
   

   addCaloriesContainer:{
    flex: 1, 
    // backgroundColor: 'yellow', 
    alignItems: 'center', 
    justifyContent:'center'
   },

   
   addCalContainer:{
    paddingVertical: 0,
    paddingHorizontal: 12,
    flex: 1,
    alignItems: 'center'
   },

   inputNoteAddCal:{
    alignSelf: "stretch",
    fontSize: 28,
    marginVertical: 11
   },

   mealButtonGroupContainer:{
    alignSelf: "stretch",
    marginVertical: 11,
   },

   mealButtonGroupText:{
    fontSize: 28,
   },
   

   addCaloriesButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: ButtonColor,
   },

   inputCaloriesAddCal:{
    fontSize: 28,
    marginVertical: 11,
    marginRight: 12,
   },

   highlitMeal:{
    backgroundColor: 'yellow'
   },

   unHighlitMeal:{
    backgroundColor: 'white'
   },
   
   addCalTopContianer:{
       flexDirection: 'row',
   },

   caloryEntryElementContainer:{
       flexDirection: 'row',
       backgroundColor: 'pink',
       alignItems: 'flex-start',
       justifyContent:'space-around',
   }
});
