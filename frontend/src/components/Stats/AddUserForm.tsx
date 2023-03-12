import React, { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { type AddUser } from '../../types'
import { CheckIcon } from '../Icons/CheckIcon'
import { ErrorMessage } from '../SideBar/ErrorMessage'

interface Props {
  addUser: ((data: any) => void) | undefined
}

export const AddUserForm: React.FC<Props> = ({ addUser }) => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<AddUser>()

  const onSubmit: SubmitHandler<any> = (data: AddUser): void => {
    if (addUser === undefined) return
    addUser(data)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful])
  return (
    <div className='lend-form'>
      <h2>ADD USER</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Name' {...register('userName', { required: 'Required Field' })}/>
        <ErrorMessage message={errors.userName?.message} />
        <input type="text" placeholder='Document ID' {...register('document', {
          required: 'Required Field',
          pattern: {
            value: /[0-9]/,
            message: 'Incorrect document format'
          }
        })}/>
        <ErrorMessage message={errors.document?.message} />

        <input type="text" placeholder='Address' {...register('address', { required: 'Required Field' })}/>
        <ErrorMessage message={errors.address?.message} />

        <input type="text" placeholder='Phone' {...register('phone', { required: 'Required Field' })}/>
        <ErrorMessage message={errors.phone?.message} />

        <button type='submit' className='btn icon btn-icon'>
          <CheckIcon width={18} height={18} strokeWidth={1} />
          Add User
        </button>
      </form>
    </div>
  )
}
