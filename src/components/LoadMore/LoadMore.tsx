import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../store/store';
import { loadMoreBooks } from '../../reducers/booksDataReducer';

const LoadMore = () =>{

    const dispatch = useDispatch()
    const index = useSelector((state: RootState) => {return state.books.index})

    const loadMore = (index: number) => {
        dispatch(loadMoreBooks(index+=30))
    }
    
    return (
        <div className='load_btn'>
            <button onClick={() => {loadMore(index)}}>Загрузить больше</button>
        </div>
    )
}

export default LoadMore