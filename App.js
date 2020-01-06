import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {AppLoading} from 'expo';

import productsReducer from './store/reducers/productReducer';
import cartReducer from './store/reducers/cartReducer';
import orderReducer from './store/reducers/orderReducer';

import ShopNavigator from './navigation/ShopNavigator';
import * as Font from 'expo-font';

//import {composeWithDevTools} from 'redux-devtools-extension';
//#region Variables-Reducers and etc.

//Reducer
const rootReducer = combineReducers({
    products: productsReducer,
    cart:cartReducer,
    orders:orderReducer
});

const store = createStore(rootReducer);

//Fonts
const fetchFonts=()=>{
    return Font.loadAsync({
        'play-fair':require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
        'play-fair-black':require('./assets/fonts/PlayfairDisplay-Black.ttf'),
        'play-fair-black-italic':require('./assets/fonts/PlayfairDisplay-BlackItalic.ttf'),
        'play-fair-bold':require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
        'play-fair-bold-italic':require('./assets/fonts/PlayfairDisplay-BoldItalic.ttf'),
        'play-fair-italic':require('./assets/fonts/PlayfairDisplay-Italic.ttf'),
    });
};
//#endregion

//#region App Function
export default function App() {
    const [fontLoaded,setFontLoaded]=useState(false);
    if (!fontLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={()=>{setFontLoaded(true)}}/>;
    }
    return (
     <Provider store={store}>
         <ShopNavigator/>
     </Provider>
    );
  }
//#endregion

//#region Style
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    }
});
//#endregion
