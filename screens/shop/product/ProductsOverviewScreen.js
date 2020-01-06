import React from 'react';
import { StyleSheet, FlatList, Platform,Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../../components/products/ProductItem';
import * as cartActions from '../../../store/actions/cartActions';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../../components/UI/HeaderButton';
import ButtonColors from '../../../constants/colors/ButtonColors';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const selectItemHandler = (id, title) => {
        props.navigation.navigate({ routeName: 'ProductDetail', params: { productId: id, productTitle: title } });
    };
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem title={itemData.item.title}
                price={itemData.item.price}
                image={itemData.item.imageUrl}
                onSelect={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title);
                }}
            >
                <Button color={ButtonColors.primary} title="View Details" onPress={() => {
                    selectItemHandler(itemData.item.id, itemData.item.title);
                }} />
                <Button title="To Cart" color={ButtonColors.primary} onPress={() => {
                    dispatch(cartActions.addToCart(itemData.item))
                }} />
            </ProductItem>} />
    );
}

ProductsOverviewScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'All Products',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => {
                    navigationData.navigation.navigate('Cart');
                }} />
            </HeaderButtons>)

    };

};


const styles = StyleSheet.create({});


export default ProductsOverviewScreen;