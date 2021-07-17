import { api } from "../api/api"
import { BookReducerState, BookReducerAction } from "../types/types"
const SET_BOOK_NAME = 'SET_BOOK_NAME'
const SET_BOOK_CATEGORIES = 'SET_BOOK_CATEGORIES'
const SET_BOOK_AUTHORS = 'SET_BOOK_AUTHORS'
const SET_BOOK_DESCRIPTION = 'SET_BOOK_DESCRIPTION'
const SET_PRESSED_ON_BOOK = 'SET_PRESSED_ON_BOOK'
const SET_BOOK_THUMBNAIL = 'SET_BOOK_THUMBNAIL'

let initialState: BookReducerState = {
    isPressedOnBook: false,
    book_name: '',
    categories: [],
    authors: [],
    description: '',
    thumbnail: '',
    pressedBack: true
}

export const bookReducer = (state=initialState, action: BookReducerAction) => {
    switch (action.type) {
        case SET_BOOK_NAME:
            return {
                ...state,
                book_name: action.book_name,
                isPressedOnBook: true,
                pressedBack: false
            }
        case SET_BOOK_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case SET_BOOK_AUTHORS:
            return {
                ...state,
                authors: action.authors
            }
        case SET_BOOK_DESCRIPTION:
            return {
                ...state,
                description: action.description 
            }
        case SET_PRESSED_ON_BOOK:
            return {
                ...state,
                isPressedOnBook: false,
                pressedBack: true
            }
        case SET_BOOK_THUMBNAIL:
            return {
                ...state,
                thumbnail: action.thumbnail
            }
        default:
            return {
                ...state
            }
    }
}

const setBookName = (book_name: string) => {
    return {
        type: SET_BOOK_NAME,
        book_name
    }
}

const setBookCategories = (categories: string[]) => {
    return {
        type: SET_BOOK_CATEGORIES,
        categories
    }
}

const setBookAuthors = (authors: string[]) => {
    return {
        type: SET_BOOK_AUTHORS,
        authors
    }
}

const setBookDescription = (description: string) => {
    return {
        type: SET_BOOK_DESCRIPTION,
        description
    }
}

const setBookThumbnail = (thumbnail: string) => {
    return {
        type: SET_BOOK_THUMBNAIL,
        thumbnail
    }
}

export const setIsPressedOnBook = () => {
    return {
        type: SET_PRESSED_ON_BOOK
    }
}

export const getBook = (id: string) => (dispatch: any) => {
    let book = api.loadBookPage(id)
    book.then(
        response => {
            if (response !== null) {
                dispatch(setBookName(response.volumeInfo.title))
                dispatch(setBookCategories(response.volumeInfo.categories))
                dispatch(setBookAuthors(response.volumeInfo.authors))
                dispatch(setBookDescription(response.volumeInfo.description))
                dispatch(setBookThumbnail(response.volumeInfo.imageLinks.thumbnail))
            }
        }
    )
}


