import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import FontNames from '../../../constants/fonts/FontNames';
import TextColors from '../../../constants/colors/TextColors';
import BackgroundColors from '../../../constants/colors/BackgroundColors';
import CartItem from '../../../components/cart/CartItem';
import * as cartActions from '../../../store/actions/cartActions';
import * as orderActions from '../../../store/actions/orderActions';
import Card from '../../../components/UI/Card';
const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            let product = state.cart.items[key];
            transformedCartItems.push({
                productId: key,
                productTitle: product.productTitle,
                productPrice: product.productPrice,
                quantity: product.quantity,
                sum: product.sum

            });
        }
        return transformedCartItems.sort((a,b)=> a.productId>b.productId?1:-1);
    });

    const dispatch= useDispatch();
    const cartItem = <CartItem />
    return (
        <View style={styles.screen}>
            <Card style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amount}>$ {Math.round(cartTotalAmount.toFixed(2)*100)/100}</Text></Text>
                <Button color={BackgroundColors.accent} title="Order Now" disabled={cartItems.length === 0} onPress={()=>{
                    dispatch(orderActions.addOrder(cartItems,cartTotalAmount));
                }} />
            </Card>
            <FlatList data={cartItems} keyExtractor={item => item.productId} renderItem={itemData => <CartItem
                deletable
                amount={itemData.item.sum}
                quantity={itemData.item.quantity}
                title={itemData.item.productTitle}
                onRemove={() => { 

                    dispatch(cartActions.removeFromCart(itemData.item.productId))
                }} />} />
        </View>
    );
}
CartScreen.navigationOptions=(navData)=>{
    headerTitle:'Your Orders'
};



const styles = StyleSheet.create({
    screen: {
        margin: 20,

    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10
       
    },
    summaryText: {
        fontFamily: FontNames.PlayFairItalic,
        fontSize: 18
    },
    amount: {
        color: TextColors.primary
    }

});


export default CartScreen;