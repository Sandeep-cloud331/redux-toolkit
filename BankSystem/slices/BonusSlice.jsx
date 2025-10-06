import { createSlice } from "@reduxjs/toolkit";

const BonusSlice= createSlice({
  name:'Bonus',
  initialState:{value:0},
  reducers:{
    increment:(state)=>{
      state.value+=1;
    },
    
  },
});

export const {increment} = BonusSlice.actions;
export default BonusSlice.reducer;