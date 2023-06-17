import colors from 'colors';
import express from 'express';
import dotenv from 'dotenv';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoDB } from './config/db.js';

import { allQuestions } from './routes/all.js';

dotenv.config();

// Connect to mongo
MongoDB();

const app = express();

// Body Parser
app.use(express.json());

// Allow CORS
app.use(cors());

// Mount routers
app.use('/questions', allQuestions);


// Listen to the PORT
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    return console.log(`Server sarted on PORT ${PORT}`.yellow.bold);
});