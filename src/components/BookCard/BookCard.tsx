import { useDispatch } from "react-redux"
import { getBook } from "../../reducers/bookReducer"

const BookCard = (props: any) => {

    const dispatch = useDispatch()
    const getCurrentBook = () => {
        dispatch(getBook(props.id))
    }

    return (
        <div className='card' id={props.id} onClick={() => getCurrentBook()}>
            <img src={props.imageLinks ? props.imageLinks.thumbnail : ''  } alt="thumbnail" />
            <p className='categories'>{props.categories ? props.categories[0] : ''}</p>
            <p className='title'>{props.title || 'no title'}</p>
            <p className='author'>{props.authors ? props.authors.join(', \n') : ''}</p>
        </div>
    )
}

export default BookCard