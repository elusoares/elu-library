import { getFavoriteBookById } from '../../services/books-service.js'
import { validateIdType } from '../validate.js'

const getFavoriteByIdController = async (req, res) => {
    try {
        const { id } = req.params
        validateIdType(id)
        const book = getFavoriteBookById(Number(id))
        res.status(200).json(book)
    } catch (error) {
        console.log(error);
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error')
    }
}

export default getFavoriteByIdController