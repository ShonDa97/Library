import React from 'react'
import './SideBar.css'

interface Props {
  isOpen: boolean
  setIsOpen: () => void

}

export const SideBar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <aside className={`sidepanel ${isOpen ? 'open' : ''}`}>
      <a className="closebtn" onClick={setIsOpen}>×</a>

    </aside>
  )
}
