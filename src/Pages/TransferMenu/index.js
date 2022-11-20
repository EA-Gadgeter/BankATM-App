import React from "react";
import "./TransferMenu.css";


const TransferMenu = () =>{
    return(
        <div className="depFunds">
            <div className="text-Dep">
                <p>Ingrese el monto a transferir</p>
            </div>
            <div className="inputDep">
                <form>
                    <input type="number" placeholder="Ingrese su monto a transferir" className="moneyDep"/>
                    <input type="submit" value="Enviar" className="dep-funds-submit"/>
                </form>

            </div>
            <div className="exit-button">
                <button>Cancelar</button>
            </div>
        </div>


    );
};

export {TransferMenu}