import { useEffect, useState } from 'react'
import { URL_BACKEND } from '../../constants'
import { ListOfBooks } from './ListOfBooks'

export const Library = (): JSX.Element => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    fetch(`${URL_BACKEND}/books`, { signal })
      .then(async (res) => await res.json())
      .then((json) => {
        setBooks(json)
      })
      .catch((e) => {
        if (e.message !== 'AbortError') {
          console.log(e)
        }
      })

    return () => { controller.abort() }
  }, [])

  return (
    <section>
      <ListOfBooks books={books} />
    </section>
  )
}
