import { Router, Request, Response } from 'express';
import { TVSeries } from '../typings/tv';
import { MediaServiceConstructorOptions } from '../typings/media';
import { TVService } from '../services/tv';
import { config } from '../config/appConfig';

const {
    sonarr: { apiKey, rootFolderPath, hostURL }
} = config;

const serviceOptions: MediaServiceConstructorOptions = {
    apiKey: apiKey,
    rootFolderPath: rootFolderPath,
    hostURL: hostURL,
    defaultQualityProfileId: 4,
    endpointURL: hostURL + 'api/v3/series',
    axiosConfig: {
        headers: {
            'X-Api-Key': apiKey
        }
    }
};

const tvService = new TVService(serviceOptions);

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const name: string | undefined = req.query.name as string;
    if (name === undefined) {
        res.status(400).send("'name' query parameter is needed.");
    } else {
        const series: TVSeries[] = await tvService.searchByName(name);
        res.json(series);
    }
});

router.get('/library', async (req: Request, res: Response) => {
    try {
        const series: TVSeries[] = await tvService.getAllInLibrary();
        if (series !== []) {
            res.status(200).json(series);
        } else {
            res.send('Unable to retrieve library').status(404);
        }
    } catch (err) {
        res.status(500).send('Internal Server Error: ' + err.message);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const series: TVSeries = req.body;
    const seriesExistsInLibrary: boolean = await tvService.checkIfExistsInLibrary(series);
    if (seriesExistsInLibrary) {
        res.status(409).send('Series already exists in library');
    } else {
        try {
            tvService.download(series);
            res.status(201).send(`Series ${series.title} added to library`);
        } catch (err) {
            console.log(err.message);
        }
    }
});

export const tvRoutes = router;
