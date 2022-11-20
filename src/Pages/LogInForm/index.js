import React from "react";
import "./LogInForm.css";

const LogInForm = () => {

    return(
        <div className="container">
            <form>
                <p>¡Bienvenido a <span>Sintindir!</span></p>
                <label className="cardLabel">Número de tarjeta</label>
                <input type="text" minLength="16" maxLength="16" className="cardInput"/>
                <label className="pinLabel">NIP</label>
                <input type="text" minLength="4" maxLength="4" className="nipInput"/>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export {LogInForm};