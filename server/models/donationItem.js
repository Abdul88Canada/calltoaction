import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: String,
    type: {
        name: String,
        id: String
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
        default: true
    },
    history: [{
        operation: String,
        amount: Number,
        date: Date
    }],
    email: String
});

const donationItem = mongoose.model('donationItem', itemSchema);

export default donationItem;