import mongoose from 'mongoose';

const typeSchema = mongoose.Schema({
    type: {
        type: String,
        unique: true
    },
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
    },
    email: String
});

const donationType = mongoose.model('donationType', typeSchema);

export default donationType;