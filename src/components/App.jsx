import Favicon from "react-favicon";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import UserContext from '../contexts/UserContext'
import IsLoadingContext from '../contexts/IsLoadingContext'

import GlobalStyles from "../theme/globalStyles";

import Loading from './loading'
import Login from "./login";
import SignUp from "./sign-up";
import Subscriptions from "./subscriptions"
import Subscription from "./subscription";
import Home from "./home";

export default function App() {
    const [ user, setUser ] = useState({
        membership: {
            perks: []
        }
    });
    const [ isLoading, setIsLoading ] = useState(false)

    return (
        <>
            <Favicon url='https://bit.ly/driven-favicon'/>
            <GlobalStyles />

            <UserContext.Provider value={{ user, setUser }} >
                <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
                    <Loading />
                    
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Login />}/>
                            <Route path='/sign-up' element={<SignUp />}/>
                            <Route path='/subscriptions' element={user.token ? <Subscriptions /> : <Navigate to='/' replace/>}/>
                            <Route path='/subscriptions/:subscriptionId' element={user.token ? <Subscription /> : <Navigate to='/' replace/>}/>
                            <Route path='/home' element={user.token ? <Home /> : <Navigate to='/' replace/>}/>
                        </Routes>
                    </BrowserRouter>
                </IsLoadingContext.Provider>
            </UserContext.Provider>
        </>
    )
};