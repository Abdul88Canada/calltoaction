import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



import { getTypes, deleteType } from '../../actions/types';

const Types = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const onEditClick = (type) => {
        navigate('/addtype', {state:{type: type}});
      }

    const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getTypes(user.result.email));
        }, [dispatch]);

    const types = useSelector((state) => state.types);

    const handleDelete = (id) => {
        dispatch(deleteType(id));
    }
    
    return ( !types.length ? 
        <div className="ui segment">
            <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
            </div>
            <p></p>
        </div> 
        :
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
                            <div className="positive ui button" onClick={() => onEditClick(type)}>Edit</div>
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