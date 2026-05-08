const { writeNewBook } = require('../../services/data-service')

const addBook = async (req, res) => {
    try {
        const body = req.body 
        if (!body) {
            throw { status: 400, message: 'Bad Request: Body is required' }
        }
        writeNewBook(body)
        res.status(201).send('Livro adicionado com sucesso')
    } catch (error) {
        console.log(error);
        
        res.status(error.status ?? 500).send(error.message ?? 'Internal Server Error')        
    }
    
}

module.exports = addBook