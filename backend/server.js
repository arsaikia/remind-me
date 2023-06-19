import colors from 'colors';
import express from 'express';
import dotenv from 'dotenv';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoDB } from './config/db.js';

import { allQuestions } from './routes/all.js';
import { authentication } from './routes/authentication.js';
import { solveHistory } from './routes/solveHistory.js';

dotenv.config();

// Connect to mongo
MongoDB();

const app = express();

// Body Parser
app.use(express.json());

// Allow CORS
const BASE_URI = process.env.BASE_URI || "http://localhost:3000";
const corsOptions = {
    origin: BASE_URI // frontend URI (ReactJS)
}
app.use(cors(corsOptions));

// Mount routers
app.use('/authentication', authentication);
app.use('/questions', allQuestions);
app.use('/solveHistory', solveHistory);


// Listen to the PORT
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    return console.log(`Server started on PORT ${PORT}`.yellow.bold);
});