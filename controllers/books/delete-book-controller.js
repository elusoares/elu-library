const { deleteBook } = require('../../services/data-service');
const { validateIdType } = require('../validate');

const deleteBookController = (req, res) => {
    try {
        const { id } = req.params
        validateIdType(id)
        deleteBook(Number(id))
        res.status(200).send('Livro deletado com sucesso')
    } catch (error) {
        console.log(error);
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error')
    }
}

module.exports = deleteBookController