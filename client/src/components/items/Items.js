import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


import {getItems, deleteItem} from '../../actions/items';
import { updateTypeCount } from '../../actions/types';


const Items = () => {
  const navigate = useNavigate();

  const onEditClick = (item) => {
    navigate('/additem', {state:{item: item}});
  }

  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    const handleOnChange = (e) => {
      console.log(e.target.value)
    }

    const handleDelete = (item) => {
      dispatch(updateTypeCount(item.type.id, item.count, 'SUB'));
      dispatch(deleteItem(item._id))
    }

    const items = useSelector((state) => state.items);

    return (
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Type</th>
              <th>Count</th>
              <th>Tracked</th>
              <th>Low Supply Limit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item._id}>
                  <td data-label="name">{item.name}</td>
                  <td data-label="type">{item.type.name}</td>
                  <td data-label="count">{item.count}</td>
                  <td data-label="tracked">{item.tracked ? 'True' : 'False'}</td>
                  <td data-label="lowsupplycount">{item.lowSupplyLimit}</td>
                  <td data-label="lowsupplycount">
                        <div className="ui two buttons">
                            <div className="positive ui button" onClick={() => onEditClick(item)} >Edit</div>
                            <div className="negative ui button" onClick={() => handleDelete(item)}>Delete</div>
                        </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    );
}

export default Items;