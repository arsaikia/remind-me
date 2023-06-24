import mongoose from 'mongoose';
import { v4 as UUID_V4 } from 'uuid';

const questionSchema = new mongoose.Schema({
    _id: { type: String, default: UUID_V4 },
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
