import React from "react";
import "./TransferMenu.css";
import {MenuButton} from "../../Components/MenuButton";


const TransferMenu = () => {
    return(
        <div className="depFunds">
            <div className="text-Dep">
                <p>Ingrese la tarjeta a la que transferir</p>
            </div>
            <div className="inputDep">
                <form>
                    <input type="number" placeholder="1111 1111 1111 1111" className="moneyDep"/>
                    <input type="submit" value="Enviar" className="dep-funds-submit"/>
                </form>
            </div>
            <MenuButton text="Cancelar"/>
        </div>
    );
};

export {TransferMenu};