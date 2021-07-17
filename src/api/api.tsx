
const key = 'AIzaSyA_fWCIngpbX5nIwsNKl1gP0PnZjbyVu0w'

let input_params: {book_name: string, index: number, category: string, sorting: string } = {
    book_name: '',
    index: 0,
    category: '',
    sorting: 'relevance'
}

export const api = {
    
    async getBooks (book_name: string, category: string, sorting: string): Promise<any> {
        
        input_params.book_name = book_name || input_params.book_name
        input_params.category = category || input_params.category
        input_params.sorting = sorting || input_params.sorting
        const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input_params.book_name}+subject:${input_params.category}&key=${key}&startIndex=0&orderBy=${input_params.sorting}&maxResults=30`)
        return result.json()
    },

    async loadMoreBooks (index: number): Promise<any> {
        input_params.index = index || input_params.index
        const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input_params.book_name}+subject:${input_params.category}&key=${key}&startIndex=${input_params.index}&orderBy=${input_params.sorting}&maxResults=30`)
        return result.json()
    },

    async loadBookPage (id: string): Promise<any> {
        const result = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        return result.json()
    }
}
