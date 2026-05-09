const express = require('express')
const booksRouter = require('./routes/books')
const favoritesRouter = require('./routes/favorites')

const app = express()

app.use(express.json())

const PORT = 8000

app.use('/livros', booksRouter)
app.use('/favoritos', favoritesRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
