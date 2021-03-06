import mongoose from "mongoose";
import donationItem from "../models/donationItem.js";

export const getItems = async (req, res) => {
    const {email} = req.query;
    try {
        const items = await donationItem.find({email: email});
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createItem = async (req, res) => {
    const item = req.body;
    const newItem = new donationItem(item);
    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateItem = async (req, res) => {
    const {id: _id} = req.params;
    const item = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No item with that id: ' + _id);
    }
    const updatedItem = await donationItem.findByIdAndUpdate(_id, {... item, _id}, {new: true});
    res.json(updatedItem);
}

export const deleteItem = async (req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No item with that id: ' + _id);
    }
    await donationItem.findByIdAndDelete(_id);
    res.json({message: 'Item deleted successfully'});
}