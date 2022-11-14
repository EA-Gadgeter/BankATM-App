import React from "react";
import {LogInForm} from "../Components/LogInForm";
import {MainMenu} from "../Components/MainMenu";
import "./AppUI.css";

const AppUI = () => {

    return(
        <div className="container">
            {/*<LogInForm/>*/}
            <MainMenu/>
        </div>

    );
};

export {AppUI};