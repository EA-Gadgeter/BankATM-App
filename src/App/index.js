import React from "react";
import {LogInForm} from "../Pages/LogInForm";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<LogInForm />}/>
        </Routes>
    );
};

export {App};