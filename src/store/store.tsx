import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { bookReducer } from '../reducers/bookReducer';
import { booksDataReducer } from '../reducers/booksDataReducer';

export const rootReducer: any = combineReducers({
    books: booksDataReducer,
    bookPage: bookReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

