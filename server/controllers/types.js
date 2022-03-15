import mongoose from "mongoose";
import donationType from "../models/donationType.js";

export const getTypes = async (req, res) => {
    try {
        const types = await donationType.find();
        console.log('Get Type List: ');
        console.log(types);
        res.status(200).json(types);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createType = async (req, res) => {
    
    const type = req.body;
    console.log(type);
    const newType = donationType(type);
    try {
        await newType.save();
        res.status(201).json(newType);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}
