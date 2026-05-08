const { Router } = require('express')
const getAllBooksController = require('../controllers/books/get-all-books-controller')
const postBook = require('../controllers/books/post-book-controller')
const getBookByIdController = require('../controllers/books/get-book-by-id-controller')
const editBookController = require('../controllers/books/edit-book-controller')
const deleteBookController = require('../controllers/books/delete-book-controller')
const booksRouter = Router()
// COLOCAR ASYNC E AWAIT NAS FUNCOES, USAR PROMISE NO FS
// TROCAR SEND POR JSON.SEND
// FAZER AS ROTAS DE FAVORITOS, CRIANDO UM BANCO SO PRA ELES
booksRouter.get('/', getAllBooksController)

booksRouter.get('/:id', getBookByIdController)

booksRouter.put('/', (req, res) => {
    res.send('Put Livros')
})

booksRouter.post('/', postBook)

booksRouter.patch('/:id', editBookController)

booksRouter.delete('/:id', deleteBookController)

module.exports = booksRouter