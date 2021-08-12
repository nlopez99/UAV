import { IMovie } from './typings/movie';
import express, { Request, Response } from 'express';
import { MovieController } from './controllers/movie';
import { config } from './config/appConfig';

const {
    app: { listeningPort }
} = config;

const app = express();
const port = listeningPort || 3000;

const movieController = new MovieController();

app.use(express.json());

app.use((req: Request, res: Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/movie', async (req: Request, res: Response) => {
    const name: string = req.query.name as string;
    const movies: IMovie[] = await movieController.searchMovieByName(name);
    res.json(movies);
});

app.get('/movies', async (req: Request, res: Response) => {
    try {
        const movies: IMovie[] = await movieController.getMoviesInLibrary();
        res.status(200).json(movies);
    } catch {
        res.status(500).send('Internal Server Error');
    }
});

app.post('/movie', async (req: Request, res: Response) => {
    const movie: IMovie = req.body;
    const movieExistsInLibrary: boolean = await movieController.checkMovieExistsInLibrary(movie);
    if (movieExistsInLibrary) {
        res.status(409).send('Movie already exists in library');
    } else {
        movieController.downloadMovie(movie);
        res.status(201).send(`Movie ${movie.title} added to library`);
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
