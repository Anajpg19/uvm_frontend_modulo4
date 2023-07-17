import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
// import hbs from 'hbs';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDirectoryPath = path.join(__dirname, 'public')
const viewsPath = path.join(__dirname, 'views');

app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Página principal (index)
app.get('/', (req, res) => {
    res.render('index', {
        "tittle": "Inicio",
        "name": "Ana Juarez"
    })
});

app.listen(3000, () => {
    console.log('Server is on port 3000');
})