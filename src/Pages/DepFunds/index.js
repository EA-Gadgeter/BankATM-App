import React from "react";
import "./DepFunds.css";
import exit from "../../img/cross-svgrepo-com.svg"

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
            <div className="exit-button">
                <button>Cancelar</button>

            </div>

        </div>


    );
};

export {DepFunds}