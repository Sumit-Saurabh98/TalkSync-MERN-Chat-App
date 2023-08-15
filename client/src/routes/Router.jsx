import React from 'react';
import {Routes, Route} from "react-router-dom"
import Homepage from '../Pages/Homepage';
import Chatpage from '../Pages/Chatpage';

function Router(props) {
    return (
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/chats' element={<Chatpage/>}/>
        </Routes>
    );
}

export default Router;