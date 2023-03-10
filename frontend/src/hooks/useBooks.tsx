import { useEffect, useState } from 'react'
import { URL_BACKEND } from '../constants'
import { type ListOfBooks } from '../types'

export const useBooks = (): [
  ListOfBooks,
  React.Dispatch<React.SetStateAction<ListOfBooks>>,
  boolean
] => {
  const [books, setBooks] = useState<ListOfBooks>([])
  const [loading, setLoading] = useState(false)

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
      .finally(() => {
        setLoading(false)
      })

    return () => {
      controller.abort()
    }
  }, [setBooks])

  return [books, setBooks, loading]
}