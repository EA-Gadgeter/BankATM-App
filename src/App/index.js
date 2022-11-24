import React from "react";
import {LogInForm} from "../Pages/LogInForm";
import {MainMenu} from "../Pages/MainMenu";
import {DepFonds} from "../Pages/DepFonds";
import {Transfer} from "../Routes/Transfer";
import {Transaction} from "../Pages/Transaction";
import {WithDraw} from "../Pages/WithDraw";
import {CheckFonds} from "../Pages/CheckFonds";
import {Route, Routes} from "react-router-dom";

import {AuthProvider} from "../Context/AuthContext";

const App = () => {
    return(
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<LogInForm />}/>
                <Route path="/menu" element={<MainMenu />}/>
                <Route path="/check-fonds" element={<CheckFonds/>} />
                <Route path="/dep-fonds" element={<DepFonds />}/>
                <Route path="/transfer" element={<Transfer />}/>
                <Route path="/withdraw" element={<WithDraw />}/>
                <Route path="/transaction" element={<Transaction />}/>
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </AuthProvider>
    );
};

export {App};