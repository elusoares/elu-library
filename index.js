const express = require('express')
const booksRouter = require('./routes/books')

const app = express()

app.use(express.json())

const PORT = 8000

app.use('/livros', booksRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
