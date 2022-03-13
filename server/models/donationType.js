import mongoose from 'mongoose';

const typeSchema = mongoose.Schema({
    type: String,
    count: {
        type: Number,
        default: 0
    }
});

const donationType = mongoose.model('donationType', typeSchema);

export default donationType;