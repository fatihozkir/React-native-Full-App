import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { createDrawerNavigator } from 'react-navigation-drawer';
import ProductsOverviewScreen from "../screens/shop/product/ProductsOverviewScreen";
import BackgroundColors from "../constants/colors/BackgroundColors";
import TextColors from "../constants/colors/TextColors";
import { createAppContainer } from "react-navigation";
import ProductDetailScreen from "../screens/shop/product/ProductDetailScreen";
import FontNames from "../constants/fonts/FontNames";
import CartScreen from "../screens/shop/cart/CartScreen";
import OrdersScreen from "../screens/shop/order/OrdersScreen";
import {Ionicons} from '@expo/vector-icons';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';

const defaultNavigationOptions={
    headerStyle:{
        backgroundColor: Platform.OS==='android'? BackgroundColors.primary:''
    },
    headerTitleStyle:{
        fontFamily:FontNames.PlayFairItalic
    },
    headerBackTitleStyle:{
        fontFamily: FontNames.PlayFairBoldItalic
    },
    headerTintColor: Platform.OS==='android'?TextColors.primaryWhite:TextColors.primary
};

const ProductsNavigator = createStackNavigator({
    ProductsOverview: {
        screen: ProductsOverviewScreen
    },
    ProductDetail:ProductDetailScreen,
    Cart:CartScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig=><Ionicons name={Platform.OS==='android'?'md-cart':'ios-cart'} size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions:defaultNavigationOptions
});

const OrdersNavigator = createStackNavigator({
    Orders:OrdersScreen
    },
    {
        navigationOptions:{
            drawerIcon: drawerConfig=><Ionicons name={Platform.OS==='android'?'md-list':'ios-list'} size={23} color={drawerConfig.tintColor}/>
        },
        defaultNavigationOptions:defaultNavigationOptions
    });

    
const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct:EditProductScreen
    },
    {
        navigationOptions:{
            drawerIcon: drawerConfig=><Ionicons name={Platform.OS==='android'?'md-create':'ios-create'} size={23} color={drawerConfig.tintColor}/>
        },
        defaultNavigationOptions:defaultNavigationOptions
    });

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders:OrdersNavigator,
    Admin:AdminNavigator
},{
    contentOptions:{
        activeTintColor: TextColors.primary
    }
});
export default createAppContainer(ShopNavigator);