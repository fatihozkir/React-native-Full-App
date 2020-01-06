import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text,Button } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import ButtonColors from '../../../constants/colors/ButtonColors';
import TextColors from '../../../constants/colors/TextColors';
import FontNames from '../../../constants/fonts/FontNames';
import * as cartActions from '../../../store/actions/cartActions';

const ProductDetailScreen = props => {
    const selectedProductId = props.navigation.getParam('productId');
    const products = useSelector(state => state.products.availableProducts);
    const productDetail = products.find(product => product.id === selectedProductId);
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: productDetail.imageUrl }} />
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.price}>${productDetail.price}</Text>
                    <Text style={styles.description}>{productDetail.description}</Text>
                </View>
                <View style={styles.actions}>
                    <Button color={ButtonColors.primary} title='Add To Cart' onPress={()=>{
                        dispatch(cartActions.addToCart(productDetail));
                    }}/>
                </View>
            </View>
        </ScrollView>
    );
}

ProductDetailScreen.navigationOptions=(navigationData)=>{
    const productTitle= navigationData.navigation.getParam('productTitle');
    return {
        headerTitle:productTitle
    };
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:300
    },
    imageContainer:{
        width:'100%',
        height:'60%'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    price:{
        fontSize:20,
        color:'#888',
        textAlign:'center',
        marginVertical:20,
    },
    actions:{
        marginVertical:10,
        alignItems:'center'
    },
    detailContainer:{
        alignItems:'center'
    }, 
    price:{
        color:TextColors.primary,
        fontSize:17,
        fontFamily:FontNames.PlayFairBold
    },
    description:{
        fontSize:14,
        textAlign:'center',
        marginHorizontal:20,
        marginTop:5,
        fontFamily:FontNames.PlayFairItalic
    }
});


export default ProductDetailScreen;