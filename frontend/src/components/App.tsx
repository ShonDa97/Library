import './App.css'
import { Library } from './Library'
import { Header } from './Header'
import { SideBar } from './SideBar'
import { useState } from 'react'
import { useBooks } from '../hooks/useBooks'

import { Form } from './SideBar/Form'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Stats } from './Stats'

const App = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [books, , loading, setReFetch] = useBooks()
  const handlePanel = (): void => {
    setIsOpen(!isOpen)
  }
  const handleFetch = (): void => {
    setReFetch(true)
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Library books={books} isLoading={loading} handleFetch={handleFetch} />
    },
    {
      path: '/stats',
      element: <Stats/>
    }
  ])
  return (
    <main>
      <div className='container'>
        <Header setIsOpen={handlePanel} />
        <SideBar isOpen={isOpen} setIsOpen={handlePanel}>
          <Form handleFetch={handleFetch} />
        </SideBar>
        <RouterProvider router={router} />

      </div>
    </main>
  )
}

export default App
