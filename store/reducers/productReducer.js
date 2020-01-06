import PRODUCTS from "../../data/dummy-data";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT
} from "../actions/productActions";
import Product from "../../models/Product";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === "u1")
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          product => product.id !== action.productId
        ),
        availableProducts: state.availableProducts.filter(
          product => product.id !== action.productId
        )
      };
    case CREATE_PRODUCT:
      const productData = action.productData;
      const newProduct = new Product(
        new Date().toString(),
        "u1",
        productData.title,
        productData.imageUrl,
        productData.description,
        productData.price
      );

      return {
        ...state,
        userProducts: state.userProducts.concat(newProduct),
        availableProducts: state.availableProducts.concat(newProduct)
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        product => product.id === action.productId
      );
      const product = action.productData;
      const updatedProduct = new Product(
        action.productId,
        state.userProducts[productIndex].ownerId,
        product.title,
        product.imageUrl,
        product.description,
        state.userProducts[productIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductIndex = state.availableProducts.findIndex(
        product => product.id === action.productId
      );
      const updatedAvailableProducts = [...state.userProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return{
          ...state,
          availableProducts:updatedAvailableProducts,
          userProducts:updatedUserProducts
      };
  }
  return state;
};
