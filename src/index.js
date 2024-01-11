import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import connect from './config/db/index.js';
import pkg from 'method-override';

//connect to db
connect.connect()
//

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(pkg('_method'))

//HTTP Logger
app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
