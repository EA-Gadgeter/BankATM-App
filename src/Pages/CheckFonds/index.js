import React from "react";
import Cards from 'react-credit-cards'

import {MenuButton} from "../../Components/MenuButton";
import {ProtectedRoute} from "../../Components/ProtectedRoute";

import "./CheckFunds.css";
import 'react-credit-cards/es/styles-compiled.css'

const CheckFonds = () => {
    return(
        <ProtectedRoute>
            <div className="check-funds-container">
                <div className="card-container">
                    <Cards
                        number={"1234123412341234"}
                        name={"Sebastián Jácome"}
                        expiry={"2010"}
                        cvc={"1234"}
                        focus={"name"}
                    />
                </div>
                <div className="text-container">
                    <p>Saldo Disponible: </p>
                    <p className="check-input">$1231239871</p>
                </div>
                <div className="button-container">
                    <div className="comprobante-button">
                        <button>Imprimir</button>

                    </div>
                    <div className="exit-button">
                        <MenuButton text="Continuar"/>
                    </div>
                    <div className="menu-button">
                        <button>Salir</button>
                    </div>

                </div>
            </div>
        </ProtectedRoute>
    );
};

export {CheckFonds}