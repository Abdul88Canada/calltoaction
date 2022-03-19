import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import {getItems, deleteItem} from '../../actions/items';


const Items = () => {

  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getItems());
    }, [dispatch]);

    const handleOnChange = (e) => {
      console.log(e.target.value)
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
                  <td data-label="type">{item.type}</td>
                  <td data-label="count">{item.count}</td>
                  <td data-label="tracked"><input type="checkbox" name="tracked" tabIndex="0" value={item.tracked} checked={item.tracked}/></td>
                  <td data-label="lowsupplycount">{item.lowSupplyLimit}</td>
                  <td data-label="lowsupplycount">
                        <div className="ui two buttons">
                            <div className="positive ui button" component={Link} to='/additem'>Edit</div>
                            <div className="negative ui button" onClick={() => dispatch(deleteItem(item._id))}>Delete</div>
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