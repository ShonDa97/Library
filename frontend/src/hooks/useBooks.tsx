import { useEffect, useState } from 'react'
import { URL_BACKEND } from '../constants'
import { type ListOfBooks } from '../types'

export const useBooks = (): [
  ListOfBooks,
  React.Dispatch<React.SetStateAction<ListOfBooks>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [books, setBooks] = useState<ListOfBooks>([])
  const [loading, setLoading] = useState(true)
  const [reFetch, setReFetch] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    fetch(`${URL_BACKEND}/books`, { signal })
      .then(async (res) => await res.json())
      .then((json) => {
        setBooks(json)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        if (e.message !== 'AbortError') {
          console.log(e)
        }
      })

    return () => {
      setReFetch(false)
      controller.abort()
    }
  }, [reFetch])

  return [books, setBooks, loading, setReFetch]
}
