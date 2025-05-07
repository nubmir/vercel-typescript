import express from 'express';
import routes from '@api/routes';
const app = express();
app.use(routes);
app.get('/', (req, res, next) => {
    res.status(200).send('Seems Good');
});
app.listen(3001, () => {
    console.log('server up!');
});
export default app;
