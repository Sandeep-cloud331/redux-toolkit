import React, { useState } from 'react'

import AddTodo from './components/addTodo'
import Todos from './components/Tdodos'

function App() {
  const [input,setInput ] = useState('');
  return (

    <div>
      <AddTodo input = {input} setInput={setInput} />
      <Todos input = {input} setInput={setInput}/>
    </div>

  )
}

export default App 