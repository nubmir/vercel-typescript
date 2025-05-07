import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import http from 'http'

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('I\'m Home!');
});

app.get('/secret', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('You found me. congratulations!');
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is started on port 3000')
})

export default server;