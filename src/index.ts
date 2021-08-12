import express, { Request, Response } from 'express';
import { config } from './config/appConfig';
import { movieRoutes } from './routes/movieRoutes';
import { tvRoutes } from './routes/tvRoutes';

const {
    app: { listeningPort }
} = config;

const app = express();
const port = listeningPort || 3000;

app.use(express.json());

app.use((req: Request, res: Response, next: express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/movie', movieRoutes);
app.use('/tv', tvRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
