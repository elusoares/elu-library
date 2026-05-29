import { deleteFavoriteBook } from '../../services/books-service.js'
import { validateIdType } from '../validate.js';

const deleteFavoriteController = (req, res) => {
    try {
        const { id } = req.params
        validateIdType(id)
        deleteFavoriteBook(Number(id))
        res.status(200).send('Livro deletado dos favoritos com sucesso')
    } catch (error) {
        console.log(error);
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error')
    }
}

export default deleteFavoriteController