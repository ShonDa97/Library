import './App.css'
import { Library } from './Library'
import { Header } from './Header'
import { SideBar } from './SideBar'
import { useState } from 'react'
import { useBooks } from '../hooks/useBooks'

import { Form } from './SideBar/Form'

const App = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [books, , loading, setReFetch] = useBooks()
  const handlePanel = (): void => {
    setIsOpen(!isOpen)
  }
  const handleFetch = (): void => {
    setReFetch(true)
  }
  return (
    <main>
      <div className='container'>
        <Header setIsOpen={handlePanel} />
        <SideBar isOpen={isOpen} setIsOpen={handlePanel}>
          <Form handleFetch={handleFetch} />
        </SideBar>
        <Library books={books} isLoading={loading} handleFetch={handleFetch} />
      </div>
    </main>
  )
}

export default App
