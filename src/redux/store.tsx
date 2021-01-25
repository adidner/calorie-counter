import { createStore } from 'redux';
import rootReducer from './reducer';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage';
  
let date = new Date();
let formattedDate = (date.getMonth() + 1).toString() + date.getDate().toString() + date.getFullYear().toString();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore( persistedReducer ); //Type saftey issue with redux persist
  let persistor = persistStore(store);
  return {store, persistor};
}

// const store = createStore(rootReducer, previousState);
// export default store;