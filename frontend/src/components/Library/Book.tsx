import { useState } from 'react'
import { type ListOfUsers, type Book as BookType } from '../../types'
import { SideBar } from '../SideBar'
import { LendForm } from './LendForm'

interface Props {
  book: BookType
  users: ListOfUsers
  handleFetch: () => void
}

export const Book: React.FC<Props> = ({
  book: { author, country, imageLink, language, title, year, lend },
  book,
  users,
  handleFetch
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handlePanel = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {!lend && (
        <SideBar isOpen={isOpen} setIsOpen={handlePanel}>
          <LendForm title={title} users={users} book={book} handleFetch={handleFetch} />
        </SideBar>
      )}

      <li
        className={`book-card ${lend ? 'borrow' : ''}`}
        title={title}
        onClick={handlePanel}
      >
        <div className='book-card-header'>
          <img src={imageLink} alt={title} height='450' />
          <div className='badges'>
            {lend && <span>BORROWED</span>}

            <span>{year}</span>
            <span>{language}</span>
          </div>
        </div>
        <div className='book-card-footer'>
          <p className='title'>{title}</p>
          <p className='author'>{author}</p>
          <p className='country'>{country}</p>
        </div>
      </li>
    </>
  )
}
