import { Router, Request, Response } from 'express';
import { ITVSeries } from '../typings/tv';
import { TVController } from '../controllers/tv';

const tvController = new TVController();
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const name: string = req.query.name as string;
    const series: ITVSeries[] = await tvController.searchSeriesByName(name);
    res.json(series);
});

router.get('/library', async (req: Request, res: Response) => {
    try {
        const series: ITVSeries[] = await tvController.getSeriesInLibrary();
        res.status(200).json(series);
    } catch {
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req: Request, res: Response) => {
    const series: ITVSeries = req.body;
    const seriesExistsInLibrary: boolean = await tvController.checkSeriesExistsInLibrary(series);
    if (seriesExistsInLibrary) {
        res.status(409).send('Series already exists in library');
    } else {
        tvController.downloadSeries(series);
        res.status(201).send(`Series ${series.title} added to library`);
    }
});

export const tvRoutes = router;
