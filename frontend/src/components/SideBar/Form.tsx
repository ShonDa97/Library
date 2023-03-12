import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { type SubmitHandler } from 'react-hook-form/dist/types'
import { URL_BACKEND } from '../../constants'
import { Language, type AddBook } from '../../types'
import { PlusIcon } from '../Icons/PlusIcon'
import { ErrorMessage } from './ErrorMessage'

interface Props {
  handleFetch: () => void
}

export const Form: React.FC<Props> = ({ handleFetch }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm<AddBook>()

  const onSubmit: SubmitHandler<any> = async (data): Promise<void> => {
    const newBook = { ...data, lend: false }
    fetch(`${URL_BACKEND}/books/add`, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async () => { handleFetch() })
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
    <div className='books-form'>
      <h2>ADD A BOOK</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          {...register('title', { required: 'Required Field' })}
          placeholder='Title'
        />
        <ErrorMessage message={errors.title?.message} />

        <input
          type='text'
          {...register('imageLink', {
            required: 'Required Field',
            validate: (urlString) => {
              let url
              try {
                url = new URL(urlString)
              } catch (e) {
                return false
              }
              return url.protocol === 'https:' ? true : 'Incorrect URL format'
            }
          })}
          placeholder='Image Link'
        />
        <ErrorMessage message={errors.imageLink?.message} />

        <input
          type='number'
          {...register('year', {
            required: 'Required Field',
            valueAsNumber: true,
            min: {
              value: 1000,
              message: 'Min 4 characters'
            },
            max: {
              value: 2040,
              message: 'Max 4 characters'
            }
          })}
          placeholder=' Year'
        />
        <ErrorMessage message={errors.year?.message} />

        <input
          type='text'
          {...register('country', { required: 'Required Field' })}
          placeholder='Country'
        />
        <ErrorMessage message={errors.country?.message} />

        <input
          type='text'
          {...register('author', { required: 'Required Field' })}
          placeholder='Author'
        />
        <ErrorMessage message={errors.author?.message} />

        <select {...register('language', { required: 'Required Field' })} >
          <option>Select a Language...</option>
          {Object.entries(Language).map(([key, value], index) => (
            <option key={index} value={value}>
              {key}
            </option>
          ))}
        </select>
        <button type='submit' className='btn icon btn-icon'>
          <PlusIcon width={18} height={18} strokeWidth={1} /> Create Book
        </button>
      </form>
    </div>
  )
}
