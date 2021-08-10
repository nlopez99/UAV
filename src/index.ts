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

app.get('/movie', async (req: Request, res: Response) => {
    const name: string = req.query.name as string;
    const movies: IMovie[] = await movieController.searchMovieByName(name);
    res.json(movies);
});

app.post('/movie', async (req: Request, res: Response) => {
    const movie: IMovie = req.body;
    movieController.downloadMovie(movie);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
