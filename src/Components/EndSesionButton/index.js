import React from 'react';
import {Link} from 'react-router-dom';
import '../MenuButton/MenuButton.css';

// Ocupa los estilos de MenuButton
export const EndSesionButton = () => {
    return (
        <Link to = '/' className = 'leave-button'>
            <button>Salir</button>
        </Link>
    )
}