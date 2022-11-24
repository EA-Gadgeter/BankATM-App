import React from "react";

import {MenuButton} from "../../Components/MenuButton";
import {ProtectedRoute} from "../../Components/ProtectedRoute";

import "./WithDraw.css";

const WithDraw = () => {
    return(
        <ProtectedRoute>
            <div className="withDraw">
                <div className="withDraw__cancel">
                    <MenuButton text="Cancelar"/>
                </div>
                <div className="withDraw__info">
                    <p>Saldo Actual</p>
                    <p>$ 999,999,999.00</p>
                </div>
                <div className="withDraw__form">
                    <form>
                        <input type="number" placeholder="$ ..."/>
                        <button type="submit">Retirar</button>
                    </form>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export {WithDraw};