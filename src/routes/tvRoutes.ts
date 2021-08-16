import { Router, Request, Response } from 'express';
import { TVSeries } from '../typings/tv';
import { MediaServiceConstructorOptions } from '../typings/media';
import { TVService } from '../services/tv';
import { config } from '../config/appConfig';

const {
    sonarr: { apiKey, rootFolderPath, hostURL }
} = config;


const serviceOptions: MediaServiceConstructorOptions = {
    rootFolderPath: rootFolderPath,
    hostURL: hostURL,
    defaultQualityProfileId: 4,
    endpointURL: hostURL + 'api/series',
    axiosConfig: {
        headers: {
            'X-Api-Key': apiKey
        }
    }
};

const tvService = new TVService(serviceOptions);

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const name: string = req.query.name as string;
    const series: TVSeries[] = await tvService.searchByName(name);
    res.json(series);
});

router.get('/library', async (req: Request, res: Response) => {
    try {
        const series: TVSeries[] = await tvService.getAllInLibrary();
        res.status(200).json(series);
    } catch {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req: Request, res: Response) => {
    const series: TVSeries = req.body;
    const seriesExistsInLibrary: boolean = await tvService.checkIfExistsInLibrary(series);
    if (seriesExistsInLibrary) {
        res.status(409).send('Series already exists in library');
    } else {
        tvService.download(series);
        res.status(201).send(`Series ${series.title} added to library`);
    }
});

export const tvRoutes = router;
