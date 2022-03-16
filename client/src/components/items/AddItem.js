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

    const types = useSelector((state) => state.types);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    

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

    

    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        newItem.history.push({operation: 'Created', amount: newItem.count, date: new Date()});

        if(newItem.type ==='') newItem.type = types[0].type;
        console.log(newItem);
        dispatch(createItem(newItem));
        clear();
    }
    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Item Name</label>
                    <input type="text" name="name" placeholder="Item Name" value={newItem.name} onChange={e => setItem({... newItem, name: e.target.value})}/>
                </div>
                <div className="field">
                    <select className="ui dropdown" onChange={e => setItem({... newItem, type: e.target.value})}>
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

export default AddItem;