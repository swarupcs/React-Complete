import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const increaseCounter =  () => {
    if(counter <= 19) {
      setCounter(counter + 1);
    }
  }

  const decreaseCounter = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter} </h2>

      <button onClick={increaseCounter}>Add value</button>
      <br />
      <button onClick={decreaseCounter}>Remove value</button>
      <h2>Footer: {counter}</h2>
    </>
  )
}

export default App
