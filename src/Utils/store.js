/* eslint-disable */
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';

import reducers from "../Redux/Reducers";
import * as types from "../Redux/ActionTypes";
const middleware = [thunk];
const persistConfig = {
  key: "root",
  keyPrefix: "",
  storage: AsyncStorage,
  whitelist: ["loginreducer"],
};
const appReducer = combineReducers({
  ...reducers,
});
const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

const pReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};

const composedEnhancers = compose(applyMiddleware(...middleware));

const stores = createStore(pReducer, initialState, composedEnhancers);
export const store = stores;

export const persistor = persistStore(store);
