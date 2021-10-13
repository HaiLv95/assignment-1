import { combineReducers } from 'redux'
import productReducer from './product.reducer'
import userReducer from './users.reducer'

export const rootReducers = combineReducers({
    products : productReducer,
    user : userReducer
})