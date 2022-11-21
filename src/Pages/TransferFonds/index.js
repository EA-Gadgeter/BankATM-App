import React from "react";
import {MenuButton} from "../../Components/MenuButton";
import "./TransferFonds.css";

const TransferFonds = () => {
    return(
        <div className="transferFonds">
            <div className="transferFonds__cancel">
                <MenuButton text="Cancelar"/>
            </div>
            <div className="transferFonds__info">
                <p>Saldo Actual</p>
                <p>$ 999,999,999.00</p>
            </div>
            <div className="transferFonds__form">
                <form>
                    <input type="number" placeholder="$ ..."/>
                    <button type="submit">Transferir</button>
                </form>
            </div>
        </div>
    );
};

export {TransferFonds};