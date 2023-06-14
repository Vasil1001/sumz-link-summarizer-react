import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import { logo } from './assets/logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />DRF
      </div>
    </main>
  )
}

export default App