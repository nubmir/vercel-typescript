import express, {Request, Response, NextFunction} from 'express';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send('Seems Good'); 
});

app.listen(3001, () => {
  console.log('server up!');
});

export { app };