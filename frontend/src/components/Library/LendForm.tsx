import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { URL_BACKEND } from '../../constants'
import {
  type LendBook,
  type AddUser,
  type ListOfUsers,
  type Book
} from '../../types'
import { CheckIcon } from '../Icons/CheckIcon'
import { ErrorMessage } from '../SideBar/ErrorMessage'

interface Props {
  book: Book
  title: string
  users: ListOfUsers
  handleFetch: () => void
}
export const LendForm: React.FC<Props> = ({
  title,
  users,
  book,
  handleFetch
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<AddUser>()

  const onSubmit: SubmitHandler<any> = async (
    data: LendBook
  ): Promise<void> => {
    fetch(`${URL_BACKEND}/books/lend/user/${data.userName}`, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        handleFetch()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful])
  return (
    <div className='lend-form'>
      <h2>LEND BOOK</h2>
      <h3>{title}</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=''>Select an user to lend this book:</label>
        <select {...register('userName', { required: 'Required Field' })}>
          <option value=''>Select a Language...</option>
          {users.map(({ id, userName }) => (
            <option key={id} value={id}>
              {userName}
            </option>
          ))}
        </select>
        <ErrorMessage message={errors.userName?.message} />
        <button type='submit' className='btn icon btn-icon'>
          <CheckIcon width={18} height={18} strokeWidth={1} />
          Lend Book
        </button>
      </form>
    </div>
  )
}
