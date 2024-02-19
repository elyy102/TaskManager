import { useState } from 'react'
import './App.css'
import Reg from './reg/Reg'
import Auth from './auth/Auth'
import Profile from './profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile />
    </>
  )
}

export default App
