import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
  TextInput
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import FontNames from "../../constants/fonts/FontNames";
import TextColors from "../../constants/colors/TextColors";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../store/actions/productActions";

const EditProductScreen = props => {
  const productId = props.navigation.getParam("productId");
  const editedProduct = useSelector(state =>
    state.products.userProducts.find(product => product.id === productId)
  );

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );
  const dispatch = useDispatch();
  const submitHandler = useCallback(() => {
    if (editedProduct) {
      dispatch(
        productActions.updateProduct(productId, title, description, imageUrl)
      );
    } else {
      dispatch(
        productActions.createProduct(title, description, imageUrl, +price)
      );
    }
    props.navigation.goBack();
  }, [dispatch, productId, title, description, imageUrl, price]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
     
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image Url:</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={imageUrl => setImageUrl(imageUrl)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price:</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={price => setPrice(price)}
            />
          </View>
        )}

        <View style={styles.formControl}>
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={description => setDescription(description)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: "100%"
  },
  label: {
    fontFamily: FontNames.PlayFairBoldItalic
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: TextColors.grey,
    borderBottomWidth: 1
  }
});

EditProductScreen.navigationOptions = navigationData => {
  const submitFunc = navigationData.navigation.getParam("submit");
  const productTitle = navigationData.navigation.getParam("productId")
    ? "Edit Product"
    : "Add Product";
  return {
    headerTitle: productTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={submitFunc}
        />
      </HeaderButtons>
    )
  };
};

export default EditProductScreen;
