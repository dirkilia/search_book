import { useDispatch } from "react-redux"
import { setIsPressedOnBook } from "../../reducers/bookReducer"

const BookPage = (props: any) => {

    const dispatch = useDispatch()

    const goBackToBooks = () => {
        dispatch(setIsPressedOnBook())
    }

    return (
        <div className='book_page'>
            <div><button onClick={() => goBackToBooks()}>Back</button></div>
            <div className='book_info'>
                <img src={props.thumbnail} alt="book_image" />
                <div className='book_page_content'>
                    <p className='categories'>{props.categories}</p>
                    <p className='bookName'>{props.book_name}</p>
                    <p className='authors'>{props.authors}</p>
                    <p className='about'>{props.description ? props.description.replace(/<(.|\n)*?>/g, '') : ''}</p>
                </div>
            </div>
        </div>
    )
}

export default BookPage
