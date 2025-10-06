import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from '../slices/AccountSclice.jsx'
import BonusReducer from '../slices/BonusSlice.jsx'
const store = configureStore({
  reducer:{
    amount:AccountReducer,
    bonus:BonusReducer
  },
});

export default store;