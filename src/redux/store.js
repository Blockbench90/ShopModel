import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzass";
import cart from "./reducers/cart";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;