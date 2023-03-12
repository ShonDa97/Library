import { useUsersContext } from '../../context/userContext'
import { type ListOfBooks as ListOfBooksType } from '../../types'
import { Book } from './Book'
import './ListOfBooks.css'

interface Props {
  books: ListOfBooksType
  handleFetch: () => void
}
export const ListOfBooks: React.FC<Props> = ({ books, handleFetch }) => {
  const { users } = useUsersContext()
  return (
    <ul className="books-list">
      {
        books.map(book => (
          < Book key={book.id} book={book} users={users} handleFetch={handleFetch} />

        ))
      }
    </ul>
  )
}
