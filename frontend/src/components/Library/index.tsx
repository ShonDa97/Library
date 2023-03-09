import { useEffect, useState } from 'react'
import { URL_BACKEND } from '../../constants'
import { ListOfBooks } from './ListOfBooks'

export const Library = (): JSX.Element => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch(`${URL_BACKEND}/books`)
      .then(async (res) => await res.json())
      .then((json) => {
        setBooks(json)
      })
      .catch((e) => {
        console.log(e)
      })

    // return () => {
    //   second
    // }
  }, [])

  return (
    <section>
      <ListOfBooks books={books} />
    </section>
  )
}
