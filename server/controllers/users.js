import mongoose from 'mongoose';

import User from '../models/user.js';

export const getUser = async (req, res) => {
    const {email} = req.body;
    try {
        const user = await User.find(email);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createUser = async (req, res) => {
    const user = req.params;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}