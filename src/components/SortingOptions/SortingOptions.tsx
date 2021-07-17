import { useDispatch } from "react-redux"
import { setCategory, setSorting } from "../../reducers/booksDataReducer"

const SortingOptions = () => {

    const dispatch = useDispatch()

    const setCategories = (category: string) => {
        dispatch(setCategory(category))
    }

    const setSort = (sorting: string) => {
        dispatch(setSorting(sorting))
    }

    return (
        <div className='sorting_options'>
            <select name="categories" id="categories" onChange={(e) => setCategories(e.target.value)}>
                <option value="all">ALL</option>
                <option value="art">ARCHITECTURE</option>
                <option value="biography">BIOGRAPHY</option>
                <option value="business">BUSINESS</option>
                <option value="comics">COMICS</option>
                <option value="computers">COMPUTERS</option>
                <option value="drama">DRAMA</option>
                <option value="education">EDUCATION</option>
                <option value="fiction">FICTION</option>
                <option value="games">GAMES</option>
                <option value="history">HISTORY</option>
                <option value="humor">HUMOR</option>
                <option value="law">LAW</option>
                <option value="medical">MEDICAL</option>
                <option value="music">MUSIC</option>
                <option value="nature">NATURE</option>
                <option value="philosophy">PHILOSOPHY </option>
                <option value="poetry">POETRY</option>
                <option value="science">SCIENCE</option>
                <option value="sports">SPORTS</option>
            </select>
            <select name="sorting" id="sorting" onChange={(e) => setSort(e.target.value)}>
                <option value="relevance">RELEVANCE</option>
                <option value="newest">NEWEST</option>
            </select>
        </div>
    )
}

export default SortingOptions