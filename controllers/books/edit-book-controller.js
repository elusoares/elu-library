const { editBookProperty } = require('../../services/books-service')
const { validateIdType } = require('../validate')

const editBookController = async (req, res) => {
    try {
        const { id } = req.params
        validateIdType(id)
        const body = req.body
        if (!body) {
            throw { status: 400, message: 'Bad Request: Body is required' }
        }
        // Object.keys(body).forEach(key => {
        //     if (!['titulo', 'autor', 'ano_publicacao'].includes(key)) {
        //         throw { status: 400, message: `Bad Request: Invalid field ${key}` }
        //     }
        // })
        editBookProperty(Number(id), body)
        res.status(200).send('Livro atualizado com sucesso')
    } catch (error) {
        console.log(error);
        
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error') 
    }
}

module.exports = editBookController