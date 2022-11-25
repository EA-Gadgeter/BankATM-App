import React from "react";
import "./LogInForm.css";
import {serviceLogin} from "../../Services/serviceLogin";
import {AuthContext} from "../../Context/AuthContext";

const LogInForm = () => {

    const [cardNumber, setCardNumber] = React.useState("");
    const [NIP, setNIP] = React.useState("");
    const {login} = React.useContext(AuthContext);

    const cardNumberOnChange = (event) => {
        setCardNumber(event.target.value);
    }

    const NIPOnChange = (event) => {
        setNIP(event.target.value);
    }

    const onLogInFormSubmitted = async (event) => {
        event.preventDefault();
        const loginResponse = await serviceLogin(cardNumber, NIP);
        /*If Backend told us that everything is correct,
             we log in the page*/
        if(loginResponse.shouldLogin) {
            const {idCuenta, tipoTarjeta} = loginResponse;
            login(idCuenta, cardNumber, tipoTarjeta);
        } else alert("Tarjeta o NIP incorrectos");

    }

    return(
        <div className="container">
            <form onSubmit={onLogInFormSubmitted}>
                <p>¡Bienvenido a <span>Sintindir!</span></p>
                <label className="cardLabel">Número de tarjeta</label>
                <input
                    type="text"
                    minLength="16" maxLength="16"
                    className="cardInput"
                    onChange={cardNumberOnChange}
                    value={cardNumber}
                />
                <label className="pinLabel">NIP</label>
                <input
                    type="text"
                    minLength="4" maxLength="4"
                    className="nipInput"
                    onChange={NIPOnChange}
                    value={NIP}
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export {LogInForm};