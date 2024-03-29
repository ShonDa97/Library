import { useAuth0 } from '@auth0/auth0-react'
import { BookIcon } from '../Icons/BookIcon'
import { PlusIcon } from '../Icons/PlusIcon'
import { StatsIcon } from '../Icons/StatsIcon'
import './header.css'

interface Props {
  setIsOpen: () => void
}

export const Header: React.FC<Props> = ({ setIsOpen }) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  console.log('❗❗ ~ isAuthenticated:', isAuthenticated)
  return (
    <header className="header">
      <div className="header-item">
        <BookIcon width={70} height={70} strokeWidth={1} />
        <div className="home-title"><a href="/"> BOOKLENDER</a></div>
      </div>
      <div className="header-item">
        {(isAuthenticated)
          ? <button className='btn icon btn-icon' onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } }) }} > Log Out</button>
          : <button className='btn icon btn-icon' onClick={() => { loginWithRedirect() }} > Log In</button>
        }
        <button className='btn icon btn-icon' ><a href="/stats">  <StatsIcon width={18} height={18} strokeWidth={1} /> Stats</a></button>
        <button className='btn icon btn-icon' onClick={setIsOpen}><PlusIcon width={18} height={18} strokeWidth={1} /> Add Book</button>
      </div>
    </header>
  )
}
