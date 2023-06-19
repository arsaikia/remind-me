import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    link: {
        type: String,
        required: true,
        trim: true,
    },
    group: {
        type: String,
        required: true,
        trim: true,
    },
    difficulty: {
        type: String,
        required: true,
        trim: true,
    },
    code: {
        type: String,
        required: false,
        trim: true,
    },
});

const Question = mongoose.model('Question', questionSchema);
export default Question;
