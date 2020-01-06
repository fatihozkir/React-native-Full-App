import React from 'react';
import { StyleSheet, Image, View, Text, Button, Platform, Dimensions, TouchableNativeFeedback } from 'react-native';
import ButtonColors from '../../constants/colors/ButtonColors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontNames from '../../constants/fonts/FontNames';
import TextColors from '../../constants/colors/TextColors';
import Card from '../UI/Card';


const deviceDimensions = Dimensions.get('window');
const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (

        <Card style={styles.product}>
            <View style={styles.touchables}>
                <TouchableCmp onPress={props.onSelect} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: props.image }} />
                        </View>

                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>$ {props.price.toFixed(2)} </Text>
                        </View>
                        <View style={styles.actions}>
                           {props.children}
                        </View>
                    </View>
                </TouchableCmp>
            </View>

        </Card>


    );
}



const styles = StyleSheet.create({
    product: {
        height: 300,
        margin: 20
       
    },
    touchables: {
        overflow: 'hidden',
        borderRadius: 10
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    details: {
        alignItems: 'center',
        height: '17%',
        padding: 10
    },
    image: {
        width: '100%',
        height: '100%',

    },
    title: {
        fontSize: 18,
        marginVertical: 2,
        fontFamily:FontNames.PlayFairBlack,
        color:TextColors.primary
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily:FontNames.PlayFairBold
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '23%',
        paddingHorizontal: 25
        
    }
});


export default ProductItem;