import express, { Application } from 'express';
import { config } from './config/appConfig';
import { movieRoutes } from './routes/movieRoutes';
import { tvRoutes } from './routes/tvRoutes';
import { Request, Response, NextFunction } from 'express';
const morgan = require('morgan');

const {
    app: { listeningPort }
} = config;

const app: Application = express();
const port = listeningPort || 3000;

app.use(express.json());
app.use(morgan('tiny'));

app.use('/movie', movieRoutes);
app.use('/tv', tvRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
