import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    TwitterAccoutn: String,
    FacebookAccount: String,
    InstagramAccoutn: String,
    tags: [],
    postContent: String,
    id: String
});

const user = mongoose.model('User', userSchema);

export default user;