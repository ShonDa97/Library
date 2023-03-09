import { type ListOfBooks as ListOfBooksType } from '../../types'
import { Book } from './Book'
import './ListOfBooks.css'

interface Props {
  books: ListOfBooksType
}
export const ListOfBooks: React.FC<Props> = ({ books }) => {
  return (
    <ul className="books-list">
      {
        books.map(book => (
          < Book key={book.id} book={book} />

        ))
      }
    </ul>
  )
}
