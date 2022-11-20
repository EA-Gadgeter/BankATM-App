import React from "react";
import {LogInForm} from "../Pages/LogInForm";
import {MainMenu} from "../Pages/MainMenu";
import {Transaction} from "../Pages/Transaction";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<LogInForm />}/>
            <Route path="/menu" element={<MainMenu />}/>
            <Route path="/transaction" element={<Transaction />}/>
        </Routes>
    );
};

export {App};