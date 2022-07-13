import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({ cart: cartReducer.reducer, user: userReducer.reducer });

const setupStore = () =>
  configureStore({
    reducer: rootReducer
  });

export default setupStore;
export type rootReducerType = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
