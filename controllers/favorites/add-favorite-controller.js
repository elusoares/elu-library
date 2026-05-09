const { getFavoriteBookById, addNewFavoriteBook } = require('../../services/books-service')
const { validateIdType } = require('../validate')

const addFavoriteController = async (req, res) => {
    try {
        const body = req.body 
        if (!body) {
            throw { status: 400, message: 'Bad Request: Body is required' }
        }
        const bodyKey = Object.keys(body)[0]
        if (bodyKey !== 'book_id') {
            throw { status: 400, message: 'Bad Request: Only "book_id" property is allowed' }
        }
        const id = body[bodyKey]
        validateIdType(id)
        addNewFavoriteBook(Number(id))
        res.status(201).send('Favorito adicionado com sucesso')
    } catch (error) {
        console.log(error);
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error')        
    }
    
}

module.exports = addFavoriteController