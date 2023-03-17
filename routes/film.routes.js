const Router = require('express')
const router = new Router()
const filmController = require('../controllers/film.controller')

router.post('/film', filmController.createFilm) // определим маршрут, по которому функция будет отрабатывать
router.get('/film', filmController.getFilms)
router.get('/film/:id', filmController.getOneFilm)
router.put('/film', filmController.updateFilm)
router.delete('/film/:id', filmController.deleteFilm)


module.exports = router