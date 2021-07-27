require('dotenv').config()
import express , {Application, Request, Response, NextFunction} from 'express'
import path from 'path'
import {db} from "./server/db/index"
import HttpException from './errorhandling'
const PORT = 8409



const app: Application = express()
export default app;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, '..', 'src','client', 'index.html'));
});

app.use('/api', require('./server/api'));

app.use((req: Request, res: Response, next: NextFunction) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

app.get('*', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, '..', 'src','client', 'index.html'));
});
const init = async () => {
  try {
   //console.log('db: ', db)
    await db.sync();
    app.listen(PORT, () =>
      console.log(` Twitchin' around on port ${PORT}`)
    );
  } catch (err) {
    console.log(`There was an error starting up :/ `, err);
  }
};

init();

app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
