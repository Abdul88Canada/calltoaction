import React from 'react';

const AddItem = () => {

    const handleSubmit = (e) => {

    }
    return (
        <div>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Item Name</label>
                    <input type="text" name="type" placeholder="Item Name" onChange={(e) => {}}/>
                </div>
                <div className="field">
                    <select className="ui dropdown">
                        <option value="">Gender</option>
                        <option value="1">Male</option>
                        <option value="0">Female</option>
                    </select>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" name="tracked" tabIndex="0" onChange={e => {}} />
                        <label>Track this item</label>
                    </div>
                </div>
                <div className="field">
                    <label>Low Supply Limit</label>
                    <input type="text" name="lowSupplyLimit" placeholder="low Supply Limit" onChange={(e) => {}}/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddItem;