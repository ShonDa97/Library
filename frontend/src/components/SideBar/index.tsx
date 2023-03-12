import './SideBar.css'

interface Props {
  isOpen: boolean
  setIsOpen: () => void
  children: JSX.Element
}

export const SideBar: React.FC<Props> = ({ isOpen, setIsOpen, children }) => {
  return (
    <aside className={`sidepanel ${isOpen ? 'open' : ''}`}>
      <div className='sidepanel-content'>
        <a className='closebtn' onClick={setIsOpen}>×</a>
        {children}
      </div>
    </aside>
  )
}
