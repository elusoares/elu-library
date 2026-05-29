import { editBookProperty } from '../../services/books-service.js';
import { validateIdType } from '../validate.js';

const editBookController = async (req, res) => {
    try {
        const { id } = req.params
        validateIdType(id)
        const body = req.body
        if (!body) {
            throw { status: 400, message: 'Bad Request: Dados do livro são obrigatórios' }
        }
        // Object.keys(body).forEach(key => {
        //     if (!['titulo', 'autor', 'ano_publicacao'].includes(key)) {
        //         throw { status: 400, message: `Bad Request: Campo inválido ${key}` }
        //     }
        // })
        editBookProperty(Number(id), body)
        res.status(200).send('Livro atualizado com sucesso')
    } catch (error) {
        console.log(error);
        
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error') 
    }
}

export default editBookController