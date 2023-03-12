import React, { createContext, useContext } from 'react'
import { useUsers } from '../hooks/useUsers'
import { type ListOfUsers } from '../types'

interface UserContext {
  users: ListOfUsers | never[]
  addUser?: (data: any) => void
  // editUser: (data: any) => void
  // deleteUser: (data: any) => void
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
  const [users, setUsers] = useUsers()

  const addUser = (): void => {

  }

  return (
    <userContext.Provider value={{ users, addUser }} >{children}</userContext.Provider>
  )
}
