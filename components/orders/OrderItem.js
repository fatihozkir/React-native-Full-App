import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CartItem from '../cart/CartItem';
import BackgroundColors from '../../constants/colors/BackgroundColors';
import FontNames from '../../constants/fonts/FontNames';
import TextColors from '../../constants/colors/TextColors';
import Card from '../UI/Card';


const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);
    console.log(props.items);
    return (
        <Card style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}> $ {props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button title={showDetails?"Hide Details":"Show Details"} color={BackgroundColors.primary} onPress={() => {
                setShowDetails(prevState => !prevState)
            }} />
            {
                showDetails && <View style={styles.detailItems}>
                     {props.items.map(
                        cartItem =>( <CartItem key={cartItem.productId} quantity={cartItem.quantity} title={cartItem.productTitle} amount={cartItem.sum} />)                      
                        
                        
                       )} 
                </View>
            }
        </Card>
    );
}



const styles = StyleSheet.create({
    orderItem: {
       
        margin: 20,
        padding: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalAmount: {
        fontFamily: FontNames.PlayFairBoldItalic,
        fontSize: 16
    },
    date: {
        fontFamily: FontNames.PlayFairItalic,
        fontSize: 16,
        color: TextColors.grey
    },
    detailItems:{
        width:'100%',
    }
});


export default OrderItem;