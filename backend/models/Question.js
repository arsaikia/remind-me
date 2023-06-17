import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    // isSolved: {
    //     type: Boolean,
    //     default: false
    // },
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
