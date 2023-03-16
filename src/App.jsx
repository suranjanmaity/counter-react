import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let handleIncrement = () => {
    setCount((prev)=>prev+1);
  }
  let handleDecrement = () => {
    setCount((prev)=>prev-1);
  }
  let handleReset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      
      <h1>Vite + React Counter</h1>
      <div className="card">
        <h3>
          <code>Count is {count}</code>
        </h3>
        <button onClick={handleIncrement}>
          Increment
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
        <button onClick={handleDecrement}>
          Decrement
        </button>
      </div>
      <p className="read-the-docs">
        Made with ❤️ by Suranjan
      </p>
    </div>
  )
}

export default App
