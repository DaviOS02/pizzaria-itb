import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HomeFuncionario from './Pages/HomeFuncionario/HomeFuncionario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div>
    <HomeFuncionario/>
    </div>

    </>
      
  )
}

export default App
