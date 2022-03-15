import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: String,
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
        default: true
    },
    history: [{
        operation: String,
        amout: Number,
        date: Date
    }]
});

const donationItem = mongoose.model('donationItem', itemSchema);

export default donationItem;