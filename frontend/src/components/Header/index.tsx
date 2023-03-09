import { BookIcon } from '../Icons/BookIcon'
import { PlusIcon } from '../Icons/PlusIcon'
import './header.css'

export const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header-item">
        <BookIcon width={70} height={70} strokeWidth={1} />
        <div className="home-title">BOOKLENDER</div>
      </div>
      <div className="header-item">
        <button className='btn icon btn-icon'><PlusIcon width={18} height={18} strokeWidth={1} /> Add Book</button>
      </div>
    </div>
  )
}
