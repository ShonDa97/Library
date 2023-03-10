import React from 'react'
import { type ListOfBooks } from '../../types'
import { Form } from './Form'
import './SideBar.css'

interface Props {
  isOpen: boolean
  setIsOpen: () => void
  setBooks: React.Dispatch<React.SetStateAction<ListOfBooks>>

}

export const SideBar: React.FC<Props> = ({ isOpen, setIsOpen, setBooks }) => {
  return (
    <aside className={`sidepanel ${isOpen ? 'open' : ''}`}>
      <a className="closebtn" onClick={setIsOpen}>×</a>
      <Form setBooks={setBooks}/>
    </aside>
  )
}
