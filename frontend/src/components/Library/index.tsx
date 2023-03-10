
import { type ListOfBooks as ListOfBooksType } from '../../types'

import { ListOfBooks } from './ListOfBooks'

interface Props {
  books: ListOfBooksType
}

export const Library: React.FC<Props> = ({ books }) => {
  return (
    <section>
      <ListOfBooks books={books} />
    </section>
  )
}
