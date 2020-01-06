import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BackgroundColors from '../../constants/colors/BackgroundColors';
import FontNames from '../../constants/fonts/FontNames';
import TextColors from '../../constants/colors/TextColors';


const CartItem = props => {

    return (
        <View style={styles.cartItem}>
            <Text style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity}</Text> <Text style={styles.mainText}>{props.title}</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
                {
                    props.deletable && 
                    <TouchableOpacity style={styles.deleteButton} onPress={(props.onRemove)}>
                        <Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'} size={23} color='red' />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: BackgroundColors.primaryWhite,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        fontFamily: FontNames.PlayFair,
        color: TextColors.grey,
        fontSize: 16
    },
    mainText: {
        fontFamily: FontNames.PlayFairBold,
        fontSize: 16
    },
    deleteButton: {
        marginLeft: 20
    }
});


export default CartItem;