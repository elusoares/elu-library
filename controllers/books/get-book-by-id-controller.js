const { getBookById } = require('../../services/book-service')
const { validateIdType } = require('../validate')

const getBookByIdController = async (req, res) => {
    try {
        const { id } = req.params
        validateIdType(id)
        const book = getBookById(Number(id))
        if (!book) {
            throw { status: 404, message: 'Livro não encontrado' }
        }
        res.send(book)
    } catch (error) {
        console.log(error);
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error')
    }
}

module.exports = getBookByIdController