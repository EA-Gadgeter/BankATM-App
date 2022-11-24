import React from "react";

import {ProtectedRoute} from "../../Components/ProtectedRoute";

import transferLogo from "../../img/transfer-svgrepo-com.svg";
import moneyK from "../../img/cash-pay-svgrepo-com.svg";
import withdrawal from "../../img/cash-machine-svgrepo-com.svg";
import inquiry from "../../img/money-svgrepo-com.svg";
import exit from "../../img/exit-svgrepo-com.svg";

import "./MainMenu.css";

const MainMenu = () => {

    return(
        <ProtectedRoute>
            <div className="mainMenu">
                <div className="headerMenu">
                    <h1>Bienvenido Usuario!</h1> {/*Aquí irá una var con el nombre del Usuario*/}
                    <p>Número de Cuenta: </p> {/*Aquí irá el número de cuenta del usuario*/}
                </div>
                <p className="opSelected">Seleccione la opción deseada.</p>
                <div className="menuButtons">
                    <div className="menuButton">
                        <button><img src={transferLogo}/> </button>
                        <p>Tranferencias</p>
                    </div>
                    <div className="menuButton">
                        <button><img src={moneyK}/></button>
                        <p>Pagos/Depositos</p>
                    </div>
                    <div className="menuButton">
                        <button><img src={withdrawal}/></button>
                        <p>Retiros</p>
                    </div>
                    <div className="menuButton">
                        <button><img src={inquiry}/></button>
                        <p>Consulta</p>
                    </div>
                    <div className="menuButton">
                        <button><img src={exit}/></button>
                        <p>Salir</p>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export {MainMenu};