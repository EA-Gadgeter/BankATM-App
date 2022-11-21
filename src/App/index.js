import React from "react";
import {LogInForm} from "../Pages/LogInForm";
import {MainMenu} from "../Pages/MainMenu";
import {DepFunds} from "../Pages/DepFunds";
import {TransferMenu} from "../Pages/TransferMenu";
import {Transaction} from "../Pages/Transaction";
import {WithDraw} from "../Pages/WithDraw";
import {TransferFonds} from "../Pages/TransferFonds";
import {CheckFunds} from "../Pages/CheckFunds";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<LogInForm />}/>
            <Route path="/menu" element={<MainMenu />}/>
            <Route path="/dep-funds" element={<DepFunds />}/>
            <Route path="/transfer-menu" element={<TransferMenu />}/>
            <Route path="/transaction" element={<Transaction />}/>
            <Route path="/withdraw" element={<WithDraw />}/>
            <Route path="/transfer-fonds" element={<TransferFonds />}/>}
            <Route path="/check-funds" element={<CheckFunds/>}/>
            <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
    );
};

export {App};