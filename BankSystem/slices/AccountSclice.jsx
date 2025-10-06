import {createSlice} from '@reduxjs/toolkit';

const AccountSlice = createSlice({
  name:'Amount',
  initialState:{value:0},
  reducers:{
    increment:(state)=>{
      state.value +=1;
    },
    decrement:(state)=>{
      if(state.value >0){
        state.value -=1;
      }
    },
    incByAmt:(state,action)=>{
      
      if(action.payload >0 ){
        state.value += action.payload;
      }
    },
  },
});

export const {incByAmt,increment,decrement} = AccountSlice.actions;

export default AccountSlice.reducer;