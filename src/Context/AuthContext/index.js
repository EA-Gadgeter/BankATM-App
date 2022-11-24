import React from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [userLoginInfo, setUserLoginInfo] = React.useState({});
    const navigateLogin = useNavigate();

    const login = (userId, cardNumber, cardType) => {
        setIsAuthenticated(true);
        setUserLoginInfo({userId, cardNumber, cardType});
        navigateLogin("/menu");
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserLoginInfo({});
        navigateLogin("/login");
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, userLoginInfo, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext};