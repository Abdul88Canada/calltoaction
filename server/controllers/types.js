import mongoose from "mongoose";
import donationType from "../models/donationType.js";

export const getTypes = async (req, res) => {
    try {
        const types = await donationType.find();
        res.status(200).json(types);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createType = async (req, res) => {
    
    const type = req.body;
    const newType = donationType(type);
    try {
        await newType.save();
        res.status(201).json(newType);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateType = async (req, res) => {
    const {id: _id} = req.params;
    const type = req.body;
    // this is to check that the id is a mogoose object
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No type with that id: ' + _id);
    }

    const updatedType = await donationType.findByIdAndUpdate(_id, {... type, _id}, {new: true});
    res.json(updatedType);
}

export const getOneType = async (req, res) => {
    const {id: _id} = req.params;
    try {
        const type = await donationType.findById(_id);
        res.status(200).json(type);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const updateTypeCount = async (req, res) => {
    const {id: _id} = req.params;
    const {amount, operation} = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No type with that id: ' + _id);
    }
    if (operation === 'ADD') await donationType.findByIdAndUpdate(_id, { $inc: { count: amount} });
    if (operation === 'SUB') await donationType.findByIdAndUpdate(_id, { $inc: { count: -amount} });
    res.json(updatedType);
}

export const deleteType = async (req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No type with that id: ' + _id);
    }
    await donationType.findByIdAndDelete(_id);
    res.json({message: 'Type deleted successfully'});
}
