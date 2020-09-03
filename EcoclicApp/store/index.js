import { createStore, applyMiddleware, combineReducers } from "redux";
import cardItems from "../reducers/cartItems";
import userReducer from "../reducers/userReducer";
import adminReducer from "../reducers/adminReducer";
import articles from "../reducers/articles";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  cardItems: cardItems,
  userReducer: userReducer,
  adminReducer: adminReducer,
  articles: articles,
});
export default store = createStore(rootReducer, applyMiddleware(thunk));
