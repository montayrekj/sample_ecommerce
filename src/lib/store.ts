import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/products";
import { storeState } from "./features/store";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

const combinedReducers = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  store: storeState.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(thunk),
});

export const persistor = persistStore(store);

// export const makeStore = () => {
//   return persistStore(
//     configureStore({
//       reducer: persistedReducer,
//       middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(productsApi.middleware),
//     })
//   );
// };

export type AppStore = typeof store;
export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;

// Infer the type of makeStore
// export type AppStore = ReturnType<typeof store.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];
