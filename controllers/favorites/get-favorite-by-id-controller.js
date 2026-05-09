const { getFavoriteBookById } = require('../../services/books-service')
const { validateIdType } = require('../validate')

const getFavoriteByIdController = async (req, res) => {
    try {
        const { id } = req.params
        validateIdType(id)
        const book = getFavoriteBookById(Number(id))
        res.status(201).json(book)
    } catch (error) {
        console.log(error);
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error')
    }
}

module.exports = getFavoriteByIdController