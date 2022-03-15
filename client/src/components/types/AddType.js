import React, {useState} from 'react';
import { useDispatch } from "react-redux";

import {createType} from '../../actions/types';

const AddType = () => {
    const [newType, setType] = useState({
        type: '',
        count: 0,
        lowSupplyLimit: 0,
        tracked: false
    });

    const dispatch = useDispatch();

    const clear = () => {
        setType({
            type: '',
            count: 0,
            lowSupplyLimit: 0,
            tracked: false
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createType(newType));
        clear();
    }


    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Type Name</label>
                    <input type="text" name="type" placeholder="Type Name" value={newType.type} onChange={(e) => setType({... newType, type: e.target.value})}/>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" name="tracked" tabIndex="0" value={newType.tracked} onChange={e => setType({... newType, tracked: (!newType.tracked)})} />
                        <label>Track this type</label>
                    </div>
                </div>
                <div className="field">
                    <label>Low Supply Limit</label>
                    <input type="number" name="lowSupplyLimit" placeholder="low Supply Limit" value={newType.lowSupplyLimit} onChange={(e) => setType({... newType, lowSupplyLimit: e.target.value})}/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddType;