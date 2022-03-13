import mongoose from "mongoose";
import donationItem from "../models/donationItem.js";

export const getItems = async (req, res) => {
    try {
        const items = await donationItem.find();
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