import express from 'express'
import morgan from 'morgan'
import { engine } from 'express-handlebars'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
import routes from './routes/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = 3000
const app = express()

// Template engine
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
    })
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

//HTTP Logger
// app.use(morgan("combined"));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Init routes
routes(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
