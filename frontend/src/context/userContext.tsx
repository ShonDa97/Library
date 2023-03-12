import React, { createContext, useContext } from 'react'
import { URL_BACKEND } from '../constants'
import { useUsers } from '../hooks/useUsers'
import { type AddUser, type ListOfUsers } from '../types'

interface UserContext {
  users: ListOfUsers
  setReFetch?: React.Dispatch<React.SetStateAction<boolean>>
  addUser?: (data: any) => void
  // editUser: (data: any) => void
  deleteUser?: (idUser: any) => void
}
interface Props {
  children: JSX.Element
}

const userContext = createContext<UserContext >({ users: [] })

export const useUsersContext = (): UserContext => {
  const context = useContext(userContext)
  return context
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers,,setReFetch] = useUsers()

  const addUser = (data: AddUser): void => {
    fetch(`${URL_BACKEND}/users/add`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setReFetch(true)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const deleteUser = (idUser: string): void => {
    fetch(`${URL_BACKEND}/users/delete`, {
      method: 'DELETE',
      body: JSON.stringify({ id: idUser }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        setReFetch(true)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <userContext.Provider value={{ users, addUser, setReFetch, deleteUser }} >{children}</userContext.Provider>
  )
}
