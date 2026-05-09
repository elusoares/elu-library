const { fetchAllFavoriteBooks } = require('../../services/books-service')

const getAllFavoritesController = async (req, res) => {
    try {
        const favorites = fetchAllFavoriteBooks()        
        res.send(favorites)        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getAllFavoritesController