import express , {Application, Request, Response, NextFunction} from 'express'
import path from 'path'



const app: Application = express()
const PORT = 8409

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

app.listen(PORT, ()=>{
    console.log(`Twitchin' around on port ${PORT}`)
})