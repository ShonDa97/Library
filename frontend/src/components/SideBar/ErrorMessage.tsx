interface Props {
  message: string | undefined
}

export const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <span className="form-error-message">{message}</span>
  )
}
