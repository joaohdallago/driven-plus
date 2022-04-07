import Favicon from "react-favicon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from '../contexts/UserContext'

import GlobalStyles from "../theme/globalStyles";

import Login from "./login";
import SignUp from "./sign-up";
import Subscriptions from "./subscriptions"
import Home from "./home";

export default function App() {
    const [ user, setUser ] = useState({});

    return (
        <>
            <Favicon url='https://bit.ly/driven-favicon'/>
            <GlobalStyles />

            <UserContext.Provider value={{ user, setUser }} >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />}/>
                        <Route path='/sign-up' element={<SignUp />}/>
                        <Route path='/subscriptions' element={<Subscriptions />}/>
                        <Route path='/home' element={<Home />}/>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    )
};