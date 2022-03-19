import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ItemForm from './items/ItemForm';
import AddType from './types/AddType';
import Types from './types/Types';
import Header from './Header';
import Dashboard from './dashbord/Dashboard';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className='ui container'>
                <Routes>
                    <Route path='/' exact element={<Dashboard/>} />
                    <Route path='/additem' exact element={<ItemForm/>} />
                    <Route path='/addtype' exact element={<AddType/>} />
                    <Route path='/typesList' exact element={<Types/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;