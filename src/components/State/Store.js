import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import menuItemReducer from "./Menu/Reducer";
import cartReducer from "./Cart/Reducer";
import orderReducer from "./Orders/Reducer";
import ingredientReducer from "./Admin/Ingredients/Reducer";
import adminRestaurantOrderReducer from "./Admin/Order/Reducer";

const rootReducer = combineReducers({
    auth:authReducer,
    restaurant: restaurantReducer,
    menuItem: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    adminIngredients: ingredientReducer,
    adminOrder: adminRestaurantOrderReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));