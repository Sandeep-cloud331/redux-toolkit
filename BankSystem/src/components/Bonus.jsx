import React from 'react'
import "../components/Bonus.css"
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../../slices/BonusSlice.jsx';

function Bonus() {
  const points = useSelector((state)=>state.bonus.value);
  const dispatch = useDispatch();
  return (
    <>
    <div className='Bonus'>
      <h1>Bonus component</h1>
      <div className='Points'>
        <h4>Total points:</h4>
        <span>{points}</span>
      </div>
      <button onClick={()=>(dispatch(increment()))}>Increment+</button>
    </div>
    </>
  )
}

export default Bonus