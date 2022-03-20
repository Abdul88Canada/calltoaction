import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {useLocation} from "react-router-dom";

import { getTypes, updateTypeCount } from '../../actions/types';
import {createItem, updateItem} from '../../actions/items';

const ItemForm = () => {

    const {state} = useLocation();
    // State to create new item
    const [newItem, setItem] = useState(state ? state.item : {
        name: '',
        type: {
            name: '',
            id: ''
        },
        count: 0,
        lowSupplyLimit: 0,
        tracked: true,
        history: []
    });

    // State to track the id of type chosen
    const [i, setI] = useState(0);

    const types = useSelector((state) => state.types);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    

    const clear = () => {
        setItem({
            name: '',
            type: {
                name: '',
                id: ''
            },
            count: 0,
            lowSupplyLimit: 0,
            tracked: true,
            history: []
        });
        setI(0);
    }

    

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        newItem.history.push(state ? {operation: 'Updated', amount: newItem.count, date: new Date()}:{operation: 'Created', amount: newItem.count, date: new Date()});
        newItem.type.name = types[i].type;
        newItem.type.id = types[i]._id;
        
        
        if (state)
            dispatch(updateItem(newItem, newItem._id));
        else {
            dispatch(createItem(newItem));
            dispatch(updateTypeCount(newItem.type.id, newItem.count, 'ADD'));
        }
        clear();
    }
    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Item Name</label>
                    <input type="text" name="name" placeholder="Item Name" value={newItem.name} onChange={e => setItem({... newItem, name: e.target.value})} required/>
                </div>
                <div className="field">
                    <select className="ui dropdown" onChange={e => setI(e.target.options.selectedIndex)} required>
                        {types.map((type) => {
                            return <option name="type" value={type.type} key={type._id}>{type.type}</option>
                        })}
                    </select>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" name="tracked" tabIndex="0" value={newItem.tracked} onChange={e => setItem({... newItem, tracked: (!newItem.tracked)})} checked={newItem.tracked}/>
                        <label>Track this item</label>
                    </div>
                </div>
                <div className="field">
                    <label>Quantity</label>
                    <input type="number" name="count" placeholder="Quantity" value={newItem.count} onChange={e => setItem({... newItem, count: e.target.value})}/>
                </div>
                {!newItem.tracked ? <div></div> : 
                    <div className="field">
                        <label>Low Supply Limit</label>
                        <input type="text" name="lowSupplyLimit" placeholder="low Supply Limit" value={newItem.lowSupplyLimit} onChange={(e) => setItem({... newItem, lowSupplyLimit: e.target.value})}/>
                    </div>
                }
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ItemForm;