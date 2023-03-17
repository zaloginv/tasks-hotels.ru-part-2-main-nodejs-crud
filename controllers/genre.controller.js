const db = require('../db')

class GenreController {
    async createGenre(req, res) {
        const {genre_name} = req.body
        console.log(genre_name)
        const newGenre = await db.query(`INSERT INTO genre (genre_name) values ($1) RETURNING *`, [genre_name])
        res.json(newGenre.rows[0])
    }
    async getGenres(req, res) {
        const genres = await db.query(`SELECT * FROM genre`)
        res.json(genres.rows)
    }
    async getOneGenre(req, res) {
        const genre_id = req.params.id
        const genre = await db.query(`SELECT * FROM genre WHERE genre_id = ($1)`, [genre_id])
        res.json(genre.rows[0])
    }
    async updateGenre(req, res) {
        const {genre_id, genre_name} = req.body
        const genreUpdate = await db.query(`UPDATE genre SET genre_name = $2 WHERE genre_id = $1 RETURNING *`,
            [genre_id, genre_name])
        res.json(genreUpdate.rows[0])
    }
    async deleteGenre(req, res) {
        const genre_id = req.params.id
        const genre = await db.query(`DELETE FROM genre WHERE genre_id = ($1)`, [genre_id])
        res.json(genre.rows[0])
    }
}

module.exports = new GenreController()