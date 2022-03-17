import mongoose from "mongoose";
import donationItem from "../models/donationItem.js";

export const getItems = async (req, res) => {
    try {
        const items = await donationItem.find();
        console.log('I am in the server for fetching all the items');
        console.log(items);
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