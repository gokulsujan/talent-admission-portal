import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HeaderComponent from './components/HeaderComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HeaderComponent />
  )
}

export default App
