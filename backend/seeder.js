import fs from 'fs';
import colors from 'colors';
import dotenv from 'dotenv';

import mongoose from 'mongoose';

const MongoDB = async () => {
    const MONGO_URI = '';
    const MONGO_URI_PROD = '';
    try {
        const conn = await mongoose.connect(MONGO_URI_PROD, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.log(
            `MongoDB Connected: ${conn.connection.host}`.cyan.underline
        );
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};

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
            const { name, link, group, difficulty } = questions[idx];
            await Question.create({ name, link, group, difficulty });
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
