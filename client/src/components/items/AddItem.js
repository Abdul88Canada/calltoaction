import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getTypes } from '../../actions/types';
import {createItem} from '../../actions/items';

const AddItem = () => {

    const [newItem, setItem] = useState({
        name: '',
        type: '',
        count: 0,
        lowSupplyLimit: 0,
        tracked: true,
        history: []
    });

    const clear = () => {
        setItem({
            name: '',
            type: '',
            count: 0,
            lowSupplyLimit: 0,
            tracked: true,
            history: []
        });
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    const types = useSelector((state) => state.types);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createItem(newItem));
        clear();
    }
    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Item Name</label>
                    <input type="text" name="name" placeholder="Item Name" onChange={(e) => {}}/>
                </div>
                <div className="field">
                    <select className="ui dropdown">
                        {types.map((type) => {
                            return <option value="" name="type" key={type._id}>{type.type}</option>
                        })}
                    </select>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" name="tracked" tabIndex="0" onChange={e => {} } checked/>
                        <label>Track this item</label>
                    </div>
                </div>
                <div className="field">
                    <label>Quantity</label>
                    <input type="text" name="count" placeholder="Quantity" onChange={(e) => {}}/>
                </div>
                <div className="field">
                    <label>Low Supply Limit</label>
                    <input type="text" name="lowSupplyLimit" placeholder="low Supply Limit" onChange={(e) => {}}/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddItem;