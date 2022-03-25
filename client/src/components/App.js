import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ItemForm from './items/ItemForm';
import TypeForm from './types/TypeForm';
import Types from './types/Types';
import Header from './Header';
import Dashboard from './dashbord/Dashboard';
import Auth from './auth/Auth';

const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
        <BrowserRouter>
            <Header />
            <div className='ui container'>
                <Routes>
                    <Route path='/' exact element={<Dashboard/>} />
                    <Route path='/additem' exact element={<ItemForm/>} />
                    <Route path='/addtype' exact element={<TypeForm/>} />
                    <Route path='/typesList' exact element={<Types/>} />
                    <Route path='/auth' element={<Auth />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;