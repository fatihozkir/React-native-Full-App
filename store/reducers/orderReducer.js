import { ADD_ORDER } from "../actions/orderActions";
import Order from "../../models/order";

const initialState = {
    orders:[]
};

export default (state=initialState,action)=>{
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(new Date().toString(), action.orderData.items,action.orderData.amount,new Date());
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
            break;
        
        default:
            break;
    }
    return state;
};

