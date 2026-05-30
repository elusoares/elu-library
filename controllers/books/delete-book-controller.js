import { deleteBook } from '../../services/books-service.js';
import { validateIdType } from '../validate.js';

const deleteBookController = async (req, res) => {
    try {
        const { id } = req.params
        validateIdType(id)
        await deleteBook(id)
        res.status(200).send('Livro deletado com sucesso')
    } catch (error) {
        console.log(error);
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error')
    }
}

export default deleteBookController