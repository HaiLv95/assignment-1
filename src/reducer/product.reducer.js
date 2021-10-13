import { actionType } from './actiontype';
const initialState ={
    products : []
};

function productReducer(state =  initialState,  action) {
    switch (action.type) {
        case actionType.GETALL_PRODUCT:
            return{
               products: action.payload,
            }
        case actionType.ADD_PRODUCT:
            return{
                //payload = product
                products : [...state.products, action.payload]
            };
        case actionType.UPDATE_PRODUCT:
            return {
                //payload = product
                products : state.products.map(item => item.id === action.payload.id ? action.payload : item)
            };
        case actionType.REMOVE_PRODUCT:
            return{
                //payload = id product
                products : state.products.filter(item => item.id !== action.payload)
            };
        default:
           return state
    }
}

export default productReducer;
