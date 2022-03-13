import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './components/App';
import Form from './components/Form/Form';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' exact element={<App/>} />
                    <Route path='/additem' exact element={<Form/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
    ,
    document.querySelector('#root')
);