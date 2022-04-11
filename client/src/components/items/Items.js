import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


import {getItems, deleteItem} from '../../actions/items';
import { updateTypeCount } from '../../actions/types';


const Items = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const uniqueTypes = [];
  const [activeIndex, setActiveIndex] = useState(null);

  const items = useSelector((state) => state.items);

  const onEditClick = (item) => {
    navigate('/additem', {state:{item: item}});
  }

  const dispatch = useDispatch();
    useEffect(() => {
      if(!user) { 
        navigate('/auth');
    }
        dispatch(getItems(user?.result.email));
    }, [dispatch]);

    for(let i = 0 ; i<items?.length ; i++) {
      if(!uniqueTypes.includes(items[i]?.type.name)) {
        uniqueTypes.push(items[i]?.type.name);
      }
    }

    const handleOnChange = (e) => {
      console.log(e.target.value)
    }

    const onTitleClick = (index) => {
      setActiveIndex(index);
    }

    const handleDelete = (item) => {
      dispatch(updateTypeCount(item.type.id, item.count, 'SUB'));
      dispatch(deleteItem(item._id))
    }

    return (
        uniqueTypes.map( (uniqueType, index) => {
          const active = index === activeIndex ? 'active' : '';
          return (
            <div className="ui styled fluid accordion" key={uniqueType}>
            <div className={`title ${active[index] ? 'active' : ''}`} onClick={() => onTitleClick(index)}>
              <i className="dropdown icon"></i>
                {uniqueType}
            </div>
            <div className={`content ${active[index] ? 'active' : ''}`}>
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
              if(item.type.name === uniqueType)
              return (
                <tr key={item._id}>
                  <td data-label="name">{item.name}</td>
                  <td data-label="type">{item.type.name}</td>
                  <td data-label="count">{item.count}</td>
                  <td data-label="tracked">{item.tracked ? <i className="large green checkmark icon"></i> : <i></i>}</td>
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
            </div>
         </div>
          )
        })
    );
}

export default Items;