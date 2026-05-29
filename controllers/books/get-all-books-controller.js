import { fetchBooks } from '../../services/books-service.js'

const getAllBooksController = async (req, res) => {
    try {
        const books = fetchBooks()        
        res.status(200).json(books)        
    } catch (error) {
        res.status(500).json(error.message ?? 'Internal Server Error')
    }
}

export default getAllBooksController