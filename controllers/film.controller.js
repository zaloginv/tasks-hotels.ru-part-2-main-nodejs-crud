const db = require('../db')

class FilmController {
    async createFilm(req, res) {
        const {title, release_date} = req.body
        const newFilm = await db.query(`INSERT INTO film (title, release_date) values ($1, $2) RETURNING *`, [title, release_date])
        res.json(newFilm.rows[0])
    }
    async getFilms(req, res) {
        const films = await db.query(`SELECT * FROM film`)
        res.json(films.rows)
    }
    async getOneFilm(req, res) {
        const film_id = req.params.id
        const film = await db.query(`SELECT * FROM film WHERE film_id = ($1)`, [film_id])
        res.json(film.rows[0])
    }
    async updateFilm(req, res) {
        const {film_id, title, release_date} = req.body
        const filmUpdate = await db.query(`UPDATE film SET title = $2, release_date = $3 WHERE film_id = $1 RETURNING *`,
            [film_id, title, release_date])
        res.json(filmUpdate.rows[0])
    }
    async deleteFilm(req, res) {
        const film_id = req.params.id
        const film = await db.query(`DELETE FROM film WHERE film_id = ($1)`, [film_id])
        res.json(film.rows)
    }
}

module.exports = new FilmController()