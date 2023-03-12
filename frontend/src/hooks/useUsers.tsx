import { useEffect, useState } from 'react'
import { URL_BACKEND } from '../constants'
import { type ListOfUsers } from '../types'

export const useUsers = (): [
  ListOfUsers,
  React.Dispatch<React.SetStateAction<ListOfUsers>>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [users, setUsers] = useState<ListOfUsers>([])
  const [loading, setLoading] = useState(true)
  const [reFetch, setReFetch] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    fetch(`${URL_BACKEND}/users`, { signal })
      .then(async (res) => await res.json())
      .then((json) => {
        setUsers(json)
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

  return [users, setUsers, loading, setReFetch]
}
