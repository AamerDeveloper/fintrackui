import { createStore, combineReducers } from "redux";
import { ProductsReducer } from "../reducer/ProductReducer";

export const configStore = () => {
  const myStore = createStore(
    combineReducers({
      ProductsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
    