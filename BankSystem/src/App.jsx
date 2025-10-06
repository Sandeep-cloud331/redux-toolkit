import { useSelector } from 'react-redux'
import './App.css'
import Account from './components/Account.jsx'
import Bonus from './components/Bonus.jsx'


function App() {
  const amount = useSelector((state)=> state.amount.value);
  const bonus = useSelector((state)=>state.bonus.value);
  
  return (
    <>
    <h3>App</h3>
    <h4>Current Amount:{amount}</h4>
    <h4>Total Bonus:{bonus}</h4>
    <Account />
    <Bonus/>
    </>
  )
}

export default App
