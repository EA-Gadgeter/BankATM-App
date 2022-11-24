import React from "react";

import { MenuButton } from "../../Components/MenuButton";
import {ProtectedRoute} from "../../Components/ProtectedRoute";

import "./DepFunds.css";

const DepFonds = () =>{
    return(
        <ProtectedRoute>
            <div className="depFunds">
                <div className="text-Dep">
                    <p>Ingrese el monto a depositar</p>
                </div>
                <div className="inputDep">
                    <form>
                        <input type="number" placeholder="Ingrese su monto a depositar" className="moneyDep"/>
                        <input type="submit" value="Depositar" className="dep-funds-submit"/>
                    </form>
                </div>
                <MenuButton text="Cancelar"/>
            </div>
        </ProtectedRoute>
    );
};

export {DepFonds};