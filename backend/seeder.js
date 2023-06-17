import fs from 'fs';
import colors from 'colors';
import { MongoDB } from './config/db.js';
import dotenv from 'dotenv';

// Load env vars
dotenv.config();

// Load models
import Question from './models/Question.js';

// Connect to mongo
MongoDB();

// Read JSON files

const questions = JSON.parse(fs.readFileSync(`./_data/questions.json`, 'utf-8'));

// Import into DB
const importData = async () => {
    try {
        for (let idx = 0; idx < questions.length; idx++) {
            const question = questions[idx];
            await Question.create(question);
        }

        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

// Delete data
const deleteData = async () => {
    try {
        await StoreProducts.destroy({ where: {} });

        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}
