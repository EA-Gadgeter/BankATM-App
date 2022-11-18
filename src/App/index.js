import React from "react";
import {LogInForm} from "../Pages/LogInForm";
import {MainMenu} from "../Pages/MainMenu";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<LogInForm />}/>
            <Route path="/menu" element={<MainMenu />}/>
        </Routes>
    );
};

export {App};