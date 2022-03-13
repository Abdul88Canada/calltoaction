import mongoose from 'mongoose';

const typeSchema = mongoose.Schema({
    type: String,
    count: {
        type: Number,
        default: 0
    },
    lowSupplyLimit: {
        type: Number,
        default: 0
    },
    tracked: {
        type: Boolean,
        default: false
    }
});

const donationType = mongoose.model('donationType', typeSchema);

export default donationType;