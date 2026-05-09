const { Router } = require('express')

const addFavoriteController = require('../controllers/favorites/add-favorite-controller')
const deleteFavoriteController = require('../controllers/favorites/delete-favorite-controller')
const getAllFavoritesController = require('../controllers/favorites/get-all-favorites-controller')
const getFavoriteByIdController = require('../controllers/favorites/get-favorite-by-id-controller')

const favoritesRouter = Router()

favoritesRouter.get('/', getAllFavoritesController)

favoritesRouter.get('/:id', getFavoriteByIdController)

favoritesRouter.post('/', addFavoriteController)

favoritesRouter.delete('/:id', deleteFavoriteController)

module.exports = favoritesRouter