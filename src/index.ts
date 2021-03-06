import express, { Application } from 'express';
import morgan from 'morgan';
import { config } from './config/appConfig';
import { movieRoutes } from './routes/movie';
import { tvRoutes } from './routes/tv';
import { Request, Response, NextFunction } from 'express';

const {
  app: { port }
} = config;

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/movie', movieRoutes);
app.use('/tv', tvRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
