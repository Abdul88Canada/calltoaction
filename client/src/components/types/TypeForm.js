import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import {useLocation} from "react-router-dom";
import Popup from 'react-popup';

import {createType, updateType} from '../../actions/types';

const AddType = () => {
    
    const {state} = useLocation();

    const [type, setType] = useState(state ? state.type : {
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
        if(state) dispatch(updateType(type._id, type));
        dispatch(createType(type));
        clear();
    }


    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Type Name</label>
                    <input type="text" name="type" placeholder="Type Name" value={type.type} onChange={(e) => setType({... type, type: e.target.value})} required/>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" name="tracked" tabIndex="0" checked={type.tracked} onChange={e => setType({... type, tracked: (!type.tracked)})} />
                        <label>Track this type</label>
                    </div>
                </div>
                {!type.tracked ? <div></div>: 
                    <div className="field">
                        <label>Low Supply Limit</label>
                        <input type="number" name="lowSupplyLimit" placeholder="low Supply Limit" value={type.lowSupplyLimit} onChange={(e) => setType({... type, lowSupplyLimit: e.target.value})}/>
                    </div>
                }
                
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddType;