import './App.css'
import { Library } from './Library'
import { Header } from './Header'
import { SideBar } from './SideBar'
import { useState } from 'react'
import { useBooks } from '../hooks/useBooks'

const App = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [books, setBooks] = useBooks()

  const handlePanel = (): void => {
    setIsOpen(!isOpen)
  }
  return (

    <main >

      <div className="container">
        <Header setIsOpen={handlePanel} />
        <SideBar isOpen={isOpen} setIsOpen={handlePanel} setBooks={setBooks}/>
        <Library books={books}/>
      </div>
    </main>
  )
}

export default App
