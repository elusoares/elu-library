import express from 'express'
import booksRouter from './routes/books.js'
import favoritesRouter from './routes/favorites.js'
import pool from './config/db-connection.js'
import { PORT } from './config/environment-variables.js'

const app = express()

try {  
    app.use(express.json())
    app.use('/livros', booksRouter)
    app.use('/favoritos', favoritesRouter)

    const dbConnection = await pool()
    console.log('Conexão com o banco de dados estabelecida com sucesso!')
    dbConnection.on('error', (error) => console.error('Erro na conexão com o banco de dados:', error))    
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    })
} catch (error) {
    console.error('Erro ao iniciar o servidor:', error)
}


