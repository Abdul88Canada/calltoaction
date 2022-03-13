import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    name: String,
    type: String,
    count: {
        type: Number,
        default: 0
    }
});

const donationItem = mongoose.model('donationItem', itemSchema);

export default donationItem;