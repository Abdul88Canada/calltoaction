import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    id: String
});

const user = mongoose.model('User', userSchema);

export default user;