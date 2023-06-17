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
    solveCount: {
        type: Number,
        required: true,
        trim: true,
    },
    lastUpdatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Question = mongoose.model('Question', questionSchema);
export default Question;
