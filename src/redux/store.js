import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import filtersReducer from "./reducers/filtersReducer";
import productForSaleReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    filters: filtersReducer,
    product: productForSaleReducer,
    cart: cartReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;