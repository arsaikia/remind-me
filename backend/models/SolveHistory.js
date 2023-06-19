import mongoose from 'mongoose';

const solveHistorySchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
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
    note: {
        type: String,
        required: false,
        trim: true,
    },
});

const SolveHistory = mongoose.model('SolveHistory', solveHistorySchema);
export default SolveHistory;
