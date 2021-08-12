import { Router, Request, Response } from 'express';
import { IMovie } from '../typings/movie';
import { MovieController } from '../controllers/movie';

const movieController = new MovieController();

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const name: string = req.query.name as string;
    const movies: IMovie[] = await movieController.searchMovieByName(name);
    res.json(movies);
});

router.get('/library', async (req: Request, res: Response) => {
    try {
        const movies: IMovie[] = await movieController.getMoviesInLibrary();
        res.status(200).json(movies);
    } catch {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req: Request, res: Response) => {
    const movie: IMovie = req.body;
    const movieExistsInLibrary: boolean = await movieController.checkMovieExistsInLibrary(movie);
    if (movieExistsInLibrary) {
        res.status(409).send('Movie already exists in library');
    } else {
        movieController.downloadMovie(movie);
        res.status(201).send(`Movie ${movie.title} added to library`);
    }
});

export const movieRoutes = router;
