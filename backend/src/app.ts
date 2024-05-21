import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import professorRoute from './routes/professorRoute';

const app = express();

app.use(cors());

app.use(express.json());

app.use(professorRoute);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

export default app;