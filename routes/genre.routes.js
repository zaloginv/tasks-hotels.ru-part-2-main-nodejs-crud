const Router = require('express')
const router = new Router()
const genreController = require('../controllers/genre.controller')

router.post('/genre', genreController.createGenre) // определим маршрут, по которому функция будет отрабатывать
router.get('/genre', genreController.getGenres)
router.get('/genre/:id', genreController.getOneGenre)
router.put('/genre', genreController.updateGenre)
router.delete('/genre/:id', genreController.deleteGenre)


module.exports = router