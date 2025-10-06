import React, { useEffect, useState } from 'react'
import "../components/Account.css"
import { decrement, incByAmt, increment } from '../../slices/AccountSclice'
import { useDispatch, useSelector } from 'react-redux'
function Account() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const amount = useSelector((state)=> state.amount.value);
  return (
    <>
    <div className='AccountCard'>
      <h1>Account Component</h1>
      <h2>Amount: ${amount}</h2>
      <div className='Panel'>
        <button onClick={()=>(dispatch(increment()))}>Increment+</button>
        <button onClick={()=>(dispatch(decrement()))}>Decrement</button> 

        <input type="number" 
        value={value}
        placeholder='Enter number'
         onChange={(e)=>setValue(Number(e.target.value))}/>

        <button onClick={()=>(dispatch(incByAmt(value)))}>Increment by+</button>
      </div>
    </div>
    </>
  )
}

export default Account