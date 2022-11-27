import React from 'react';
import {AuthContext} from "../../Context/AuthContext";
import '../MenuButton/MenuButton.css';

// Ocupa los estilos de MenuButton
export const EndSesionButton = () => {

    const {logout} = React.useContext(AuthContext);

    return (
        <button className = 'leave-button' onClick={logout}>Salir</button >
    )
}