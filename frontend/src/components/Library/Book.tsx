import { type Book as BookType } from '../../types'

interface Props {
  book: BookType
}

export const Book: React.FC<Props> = ({ book: { author, country, imageLink, language, title, year, lend } }) => {
  return (
    <li className={`book-card ${lend ? 'borrow' : ''}`}>
      <div className="book-card-header">
        <img src={imageLink} alt={title} height='450' />
        <div className="badges">
          {lend && (<span>BORROWED</span>)}

          <span>{year}</span>
          <span>{language}</span>
        </div>
      </div>
      <div className="book-card-footer">
        <p className='author'>{author}</p>
        <p className='country'>{country}</p>
      </div>
    </li>
  )
}
