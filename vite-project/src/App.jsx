import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
      <div>
      JTHREEGLOBALLY
      </div>
      <h1>Community Site</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Good times and great hits
        </p>
      </div>
      <p className="read-the-docs">
       Allow the chief to announce the community meetings
      </p>
    </>
  )
}

export default App
