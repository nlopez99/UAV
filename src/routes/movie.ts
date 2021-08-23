import { Router, Request, Response } from 'express';
import { Movie } from '../typings/movie';
import { MediaServiceConstructorOptions } from '../typings/media';
import { MovieService } from '../services/movie';
import { config } from '../config/appConfig';
const {
    radarr: { apiKey, rootFolderPath, hostURL }
} = config;

const serviceOptions: MediaServiceConstructorOptions = {
    rootFolderPath: rootFolderPath,
    hostURL: hostURL,
    defaultQualityProfileId: 4,
    endpointURL: hostURL + 'api/v3/movie',
    queueURL: hostURL + 'api/v3/queue/details',
    axiosConfig: {
        headers: {
            'X-Api-Key': apiKey
        }
    }
};

const movieService = new MovieService(serviceOptions);

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const name: string | undefined = req.query.name as string;
    if (name === undefined) {
        res.status(400).send("'name' query parameter is needed.");
    } else {
        const movies: Movie[] = await movieService.searchByName(name);
        res.json(movies);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const movie: Movie = req.body;
    const movieExistsInLibrary: boolean = await movieService.checkIfExistsInLibrary(movie);
    if (movieExistsInLibrary) {
        res.status(409).send('Movie already exists in library');
    } else {
        movieService.download(movie);
        res.status(201).send(`Movie ${movie.title} added to library`);
    }
});

router.get('/library', async (req: Request, res: Response) => {
    try {
        const movies: Movie[] = await movieService.getAllInLibrary();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).send('Internal Server Error: ' + err);
    }
});

router.get('/queue', async (req: Request, res: Response) => {
    try {
        const currentQueue: any[] = await movieService.getDownloadQueue();
        res.status(200).json(currentQueue);
    } catch (err) {
        res.status(500).send('Internal Server Error: ' + err);
    }
});

export const movieRoutes = router;
