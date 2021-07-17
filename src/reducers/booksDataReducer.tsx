import { api } from "../api/api"
import { BookDataReducerState, BookDataReducerAction } from "../types/types"


const INPUT_VALUE = 'INPUT_VALUE'
const ITEMS = 'ITEMS'
const INCREASE_INDEX = 'INCREASE_INDEX'
const CATEGORY = 'CATEGORY'
const SORTING = 'SORTING'
const TOTAL_BOOKS_NUMBER = 'TOTAL_BOOKS_NUMBER'



let initialState: BookDataReducerState = {
    input_text: '',
    category: '',
    sorting: 'relevance',
    index: 0,
    items: [],
    isLoaded: false,
    total_books_number: 0
}

export const booksDataReducer = (state=initialState, action: BookDataReducerAction) => {
    switch (action.type) {
        case INPUT_VALUE:
            if (state.isLoaded) {
                return {
                    ...state,
                    input_text: action.input_text,
                    isLoaded: false
                }
            } else {
                return {
                    ...state,
                    input_text: action.input_text,
                }
            }
        case ITEMS:
            if (!state.isLoaded) {
                return {
                    ...state,
                    items: action.items,
                    isLoaded: true,
                    input_text: ''
                }
            } else {
                return {
                    ...state,
                    items: action.items ? state.items.concat(action.items) : state.items,
                    isLoaded: true,
                    input_text: ''
                }
            }
        case INCREASE_INDEX:
            return {
                ...state,
                index: action.index,
            }
        case CATEGORY:
            return {
                ...state,
                category: action.category
            }
        case SORTING:
            return {
                ...state,
                sorting: action.sorting
            }
        case TOTAL_BOOKS_NUMBER:
            return {
                ...state,
                total_books_number: action.total_books_number
            }
        default:
            return {
                ...state
            }
    }
}

export const changeInputText = (input_text: string) => {
    return {
        type: INPUT_VALUE,
        input_text 
    }
}

const setItems = (items: []) => {
    return {
        type: ITEMS,
        items
    }
}

export const setIndex = (index: number) => {
    return {
        type: INCREASE_INDEX,
        index,
    }
}

export const setCategory = (category: string) => {
    return {
        type: CATEGORY,
        category
    }
}

export const setSorting = (sorting: string) => {
    return {
        type: SORTING,
        sorting
    }
}

const setTotalBooks = (total_books_number: number) => {
    return {
        type: TOTAL_BOOKS_NUMBER,
        total_books_number
    }
}



export const getAllBooks = (book_name: string, category: string, sorting: string) => (dispatch: any) => {
    let items = api.getBooks(book_name, category, sorting)
    items.then(
        response => {
            if (response !== null) {
                dispatch(setItems(response.items))
                dispatch(setTotalBooks(response.totalItems))
            }
        }
    )
}

export const loadMoreBooks = (index: number) => (dispatch: any) => {
    let items = api.loadMoreBooks(index)
    items.then(
        response => {
            if (response !== null) {
                dispatch(setIndex(index))
                dispatch(setItems(response.items))
            }
        }
    )
}


