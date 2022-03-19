import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { getTypes, deleteType } from '../../actions/types';

const Types = () => {

    const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getTypes());
        }, [dispatch]);

    const types = useSelector((state) => state.types);

    const handleDelete = (id) => {
        dispatch(deleteType(id));
    }
    
    return ( !types.length ? <div>Loading</div> :
        (
        <div className="ui cards">
            {types.map((type) => {
                return (
                <div className="card" key={type._id}>
                    <div className="content">
                        <div className="header">
                            Type Name: <br/>{type.type}
                        </div>
                    </div>
                    <div className="extra content">
                        Count: {type.count}<br/>
                        Tracked: {type.tracked ? 'Ture' : 'False'}<br/>
                        Low Supply Limit: {type.lowSupplyLimit}
                        <div className="ui two buttons">
                            <div className="positive ui button">Edit</div>
                            <div className="negative ui button" onClick={() => handleDelete(type._id)}>Delete</div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
    );
}

export default Types;