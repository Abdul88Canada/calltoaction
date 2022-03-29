import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.find({email});

        if (!user) res.status(404).json({message: 'User doesn\'t exsit.'});

        const isPasswordCorrect = await bcrypt.compare(password, exsitingUser.password);

        if(!isPasswordCorrect) return res.status(404).json({message: 'Invalid cred.'});

        const token = jwt.sign({email: exsitingUser.email, id: exsitingUser._id}, 'test', {expiresIn: '1h'});

        res.status(200).json({result: user, token});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const signup = async (req, res) => {
    try {
        const {email, password, firstName, lastName, confirmPassword} = req.body;

        const exsitingUser = await User.findOne({email});
    
        if (exsitingUser) return res.status(400).json({message: 'User already exsit.'});
    
        if(password !== confirmPassword) return res.status(400).json({message: 'Passwords don\'t match.'});
    
        const hashedPassword = await bcrypt.hash(password, 12);
    
        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});
    
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: '1h'});
    
        res.status(200).json({result, token});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}