export type BookDataReducerState = {
    input_text: string, 
    category: string, 
    sorting:string, 
    index: number, 
    items: [], 
    isLoaded: boolean, 
    total_books_number: number
}

export type BookDataReducerAction = {
    type: string, 
    input_text: string, 
    items: [], 
    index: number, 
    category: string, 
    sorting: string, 
    total_books_number: number
}

export type BookReducerState = {
    isPressedOnBook: boolean, 
    book_name: string, 
    categories: string[], 
    authors: string[], 
    description: string, 
    thumbnail: string, 
    pressedBack: boolean
}

export type BookReducerAction = {
    type: string, 
    book_name: string, 
    categories: string[], 
    authors: string[], 
    description: string, 
    thumbnail: string
}