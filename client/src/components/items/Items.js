import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {getItems} from '../../actions/items';


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
                  <td data-label="name"><div className="ui form field"><input type="text" name="name" value={item.name} placeholder="Item Name" onChange={e => handleOnChange(e)}/></div></td>
                  <td data-label="type">{item.type}</td>
                  <td data-label="count">{item.count}</td>
                  <td data-label="tracked">{item.tracked ? 'True' : 'False'}</td>
                  <td data-label="lowsupplycount">{item.lowSupplyLimit}</td>
                  <td data-label="lowsupplycount">
                        <div className="ui two buttons">
                            <div className="negative ui button">Delete</div>
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