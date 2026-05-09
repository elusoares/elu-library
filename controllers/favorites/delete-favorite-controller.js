const { deleteFavoriteBook } = require('../../services/books-service');
const { validateIdType } = require('../validate');

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

module.exports = deleteFavoriteController