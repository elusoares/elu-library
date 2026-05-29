import { Router } from 'express'
import addFavoriteController from '../controllers/favorites/add-favorite-controller.js'
import deleteFavoriteController from '../controllers/favorites/delete-favorite-controller.js'
import getAllFavoritesController from '../controllers/favorites/get-all-favorites-controller.js'
import getFavoriteByIdController from '../controllers/favorites/get-favorite-by-id-controller.js'

const favoritesRouter = Router()

favoritesRouter.get('/', getAllFavoritesController)

favoritesRouter.get('/:id', getFavoriteByIdController)

favoritesRouter.post('/', addFavoriteController)

favoritesRouter.delete('/:id', deleteFavoriteController)

export default favoritesRouter