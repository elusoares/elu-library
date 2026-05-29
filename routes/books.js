import { Router } from 'express'
import getAllBooksController from '../controllers/books/get-all-books-controller.js'
import getBookByIdController from '../controllers/books/get-book-by-id-controller.js'
import editBookController from '../controllers/books/edit-book-controller.js'
import deleteBookController from '../controllers/books/delete-book-controller.js'
import addBookController from '../controllers/books/add-book-controller.js'

const booksRouter = Router()

booksRouter.get('/', getAllBooksController)

booksRouter.get('/:id', getBookByIdController)

booksRouter.put('/', (req, res) => {
    res.send('Put Livros')
})

booksRouter.post('/', addBookController)

booksRouter.patch('/:id', editBookController)

booksRouter.delete('/:id', deleteBookController)

export default booksRouter