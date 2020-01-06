import React from 'react';
import { StyleSheet, View, FlatList, Text, Button, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderTitle } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../../components/UI/HeaderButton';
import OrderItem from '../../../components/orders/OrderItem';


const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);
    return (
        <FlatList data={orders} keyExtractor={item => item.id} renderItem={itemData => <OrderItem 
            items={itemData.item.items} 
            amount={itemData.item.totalAmount} 
            date={itemData.item.readableDate}/>} />
    );
}

OrdersScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => {
                     navigationData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>),
       
    };

};

const styles = StyleSheet.create({});


export default OrdersScreen;