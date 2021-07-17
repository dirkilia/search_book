
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { changeInputText } from '../../reducers/booksDataReducer';
import { getAllBooks } from '../../reducers/booksDataReducer';


const SearchForm = () => {

    const dispatch = useDispatch()
    const input_text = useSelector((state: RootState) => {return state.books.input_text})
    const category = useSelector((state: RootState) => {return state.books.category})
    const sorting = useSelector((state: RootState) => {return state.books.sorting})

    const changeInputValue = (value: string) => {
        dispatch(changeInputText(value))
    }

    const getBooks = (input_text: string) => {
        dispatch(getAllBooks(input_text, category, sorting))
    }
    const getBooksOnEnter = (input_text: string, e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            dispatch(getAllBooks(input_text, category, sorting))
        }
    }

    return (
        <div className='search'>
            <input type="text" placeholder='Type book name' value={input_text} onChange={(e) => changeInputValue(e.target.value)} 
            onKeyPress={(e) => getBooksOnEnter(input_text, e)}/>
            <button onClick={() => getBooks(input_text)}><p>Find</p></button>
        </div>
    )
}

export default SearchForm