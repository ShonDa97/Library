import { type ListOfUsers } from '../../types'
import { DeleteIcon } from '../Icons/DeleteIcon'
import { EditIcon } from '../Icons/EditIcon'

interface Props {
  users: ListOfUsers
  deleteUser: ((idUser: any) => void) | undefined
}

export const UserTable: React.FC<Props> = ({ users, deleteUser }) => {
  const handleDelete = (idUser: string): void => {
    if (deleteUser == null) return
    deleteUser(idUser)
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Document</th>
          <th>Adress</th>
          <th>Phone</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, userName, phone, address, document }) => (
          <tr key={id}>
            <td>{userName}</td>
            <td>{document}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>
              <button className='btn icon btn-icon'>
                <EditIcon width={18} height={18} strokeWidth={1} /> Edit User
              </button>
            </td>
            <td>
            <button className='btn icon btn-icon' onClick={() => { handleDelete(id) }}>
                <DeleteIcon width={18} height={18} strokeWidth={1}/> Delete User
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
