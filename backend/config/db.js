import colors from 'colors';
import mongoose from 'mongoose';

const MongoDB = async () => {
    const MONGO_URI = (process.env.NODE_ENV == 'development') ? process.env.MONGO_URI_DEV : process.env.MONGO_URI;
    console.log(`Connected DB to ${process.env.NODE_ENV}`.red.bold);

    try {
        const conn = await mongoose.connect(MONGO_URI, {
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


export { MongoDB };
