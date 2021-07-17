import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import BookCard from './components/BookCard/BookCard';
import LoadMore from './components/LoadMore/LoadMore';
import SearchForm from './components/SearchForm/SearchFrom';
import SortingOptions from './components/SortingOptions/SortingOptions';
import BookPage from './components/BookPage/BookPage';


const App = () => {

  let isPressedOnBook = useSelector((state: RootState) => {return state.bookPage.isPressedOnBook})
  let bookPage = useSelector((state: RootState) => {return state.bookPage})
  let books = useSelector((state: RootState) => {return state.books.items})
  let total = useSelector((state: RootState) => {return state.books.total_books_number})
  let book_cards = books ? books.map((element: any) => {return <BookCard {...element.volumeInfo || undefined} id={element.id}/>}) : ''
  return (
    <div className="App">
      <header>
        <h1>Поиск книг</h1>
        <SearchForm />
        <SortingOptions />
      </header>
      <div className='results'>
          {total ? <h3>Results found {total}</h3>: ''} 
        </div>
      <div className='cards'>
        {isPressedOnBook ? <BookPage {...bookPage}/> : book_cards}
      </div>
      {books ? (books.length > 0 && bookPage.pressedBack ? <LoadMore /> : '') : 'No results'}
      

    </div>
  );
}

export default App;
