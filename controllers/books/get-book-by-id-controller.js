import { getBookById } from '../../services/books-service.js'
import { validateIdType } from '../validate.js'

const getBookByIdController = async (req, res) => {
    try {
        const { id } = req.params
        validateIdType(id)
        const book = await getBookById(id)
        if (!book) {
            throw { status: 404, message: 'Livro não encontrado' }
        }
        res.status(200).json(book)
    } catch (error) {
        console.log(error);
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error')
    }
}

export default getBookByIdController