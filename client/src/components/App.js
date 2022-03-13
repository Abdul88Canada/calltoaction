import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Call To Action</h1>
            <Link to='/additem'>Add Item</Link>
        </div>
    );
}

export default App;