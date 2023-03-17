const express = require('express')
const PORT = process.env.PORT || 8080
const filmRouter = require('./routes/film.routes')
const genreRouter = require('./routes/genre.routes')

const app = express()


app.use(express.json())
app.use('/api', filmRouter)
app.use('/api', genreRouter)

app.listen(PORT, () => console.log(`server was started at port ${PORT}`))