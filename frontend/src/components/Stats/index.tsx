import { UserTable } from './UserTable'
import { PlusIcon } from '../Icons/PlusIcon'
import { SideBar } from '../SideBar'
import { useState } from 'react'
import './Stats.css'
import { useUsersContext } from '../../context/userContext'
import { AddUserForm } from './AddUserForm'
export const Stats = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const { users, addUser, deleteUser } = useUsersContext()

  const handlePanel = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <section>
      <div className='user-bar'>
        <SideBar isOpen={isOpen} setIsOpen={handlePanel}>
          <AddUserForm addUser={addUser}/>
        </SideBar>
        <button className='btn icon btn-icon' onClick={handlePanel}>
          <PlusIcon width={18} height={18} strokeWidth={1} /> Add User
        </button>
        <UserTable users={users} deleteUser={deleteUser}/>
      </div>
    </section>
  )
}
