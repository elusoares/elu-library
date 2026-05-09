const { fetchAllFavoriteBooks } = require('../../services/books-service')

const getAllFavoritesController = async (req, res) => {
    try {
        const favorites = fetchAllFavoriteBooks()        
        res.status(200).json(favorites)        
    } catch (error) {
        res.status(500).send(error.message ?? 'Internal Server Error')
    }
}

module.exports = getAllFavoritesController