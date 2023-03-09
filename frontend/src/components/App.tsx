import './App.css'
import { Library } from './Library'
import { Header } from './Header'
import { SideBar } from './SideBar'
import { useState } from 'react'

const App = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const handlePanel = (): void => {
    setIsOpen(!isOpen)
  }
  return (

    <main >
      <div className="container">
        <Header setIsOpen={handlePanel} />
        <SideBar isOpen={isOpen} setIsOpen={handlePanel} />
        <Library />
      </div>
    </main>
  )
}

export default App
