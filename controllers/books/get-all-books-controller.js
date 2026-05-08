const { fetchBooks } = require('../../services/books-service')

const getAllBooksController = async (req, res) => {
    try {
        const books = fetchBooks()        
        res.send(books)        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getAllBooksController