import Favicon from "react-favicon";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "../theme/globalStyles";

import Login from "./login";
import SignUp from "./sign-up";

export default function App() {
    return (
        <>
            <Favicon url='https://bit.ly/driven-favicon'/>
            <GlobalStyles />

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/sign-up' element={<SignUp />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};