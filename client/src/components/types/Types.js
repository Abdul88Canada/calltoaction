import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getTypes } from '../../actions/types';

const Types = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch]);

    const types = useSelector((state) => state.types);
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
                            <div className="negative ui button">Edit</div>
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