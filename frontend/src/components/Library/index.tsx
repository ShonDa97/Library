import { type ListOfBooks as ListOfBooksType } from '../../types'
import { Loader } from '../Loader'

import { ListOfBooks } from './ListOfBooks'

interface Props {
  books: ListOfBooksType
  isLoading: boolean
}

export const Library: React.FC<Props> = ({ books, isLoading }) => {
  return (
    <section>
      {isLoading
        ? (
        <Loader />
          )
        : books.length === 0
          ? (
        <p className='non-message'>NO HAY LIBROS DISPONIBLES...</p>
            )
          : (
        <ListOfBooks books={books} />
            )}
    </section>
  )
}
