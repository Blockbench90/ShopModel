import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import filters from "./reducers/filtersReducer";
import product from "./reducers/productReducer";
import cart from "./reducers/cartReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    filters,
    product,
    cart
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;