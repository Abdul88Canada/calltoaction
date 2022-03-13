import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    TwitterAccoutn: String,
    FacebookAccount: String,
    InstagramAccoutn: String,
    tags: [],
    postContent: String;
});

const user = mongoose.model('user', userSchema);

export default user;