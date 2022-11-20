import React from "react";
import { CancelButton } from "../../Components/CancelButton";
import "./DepFunds.css";


const DepFunds = () =>{
    return(
        <div className="depFunds">
            <div className="text-Dep">
                <p>Ingrese el monto a depositar</p>
            </div>
            <div className="inputDep">
                <form>
                    <input type="number" placeholder="Ingrese su monto a depositar" className="moneyDep"/>
                    <input type="submit" value="Enviar" className="dep-funds-submit"/>
                </form>
            </div>
            <CancelButton/>
        </div>
    );
};

export {DepFunds};