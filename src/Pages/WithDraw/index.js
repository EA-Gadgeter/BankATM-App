import React from "react";

import {MenuButton} from "../../Components/MenuButton";
import {ProtectedRoute} from "../../Components/ProtectedRoute";
import {serviceWithdraw} from "../../Services/serviceWithdraw";
import {UserContext} from "../../Context/UserContext";
import {AuthContext} from "../../Context/AuthContext";
import {useNavigate} from "react-router-dom";

import "./WithDraw.css";

const WithDraw = () => {

    const {userFonds, setUserFonds} = React.useContext(UserContext);
    const {userLoginInfo: {idAccount}} = React.useContext(AuthContext);
    const [fondsToDraw, setFondsToDraw] = React.useState("");
    const returnMenu = useNavigate();


    const fondsOnChange = (event) => {
        setFondsToDraw(event.target.value);
    };

    const withdrawSubmitted = (event) => {
        event.preventDefault();
        if (fondsToDraw > 0) {
            serviceWithdraw(idAccount, fondsToDraw)
                .then(response => {
                    const {withdrawSuccesful, validMoney} = response;

                    if(!withdrawSuccesful && !validMoney) {
                        alert("No tienes suficientes fondos, ingresa otra cantidad porfavor.")
                    } else if(!withdrawSuccesful && validMoney) {
                        alert("Lo sentimos, no se pudo realiza el retiro, intentalo más tarde.")
                    }
                    else if(withdrawSuccesful && validMoney) {
                        alert("Porfavor, retire su dinero.")
                        setUserFonds(Number(userFonds) - Number(fondsToDraw));
                        returnMenu("/menu");
                    }
                });
        }
    };

    return(
        <ProtectedRoute>
            <div className="withDraw">
                <div className="withDraw__cancel">
                    <MenuButton text="Cancelar"/>
                </div>
                <div className="withDraw__info">
                    <p>Saldo Actual</p>
                    <p>{`$${userFonds}`}</p>
                </div>
                <div className="withDraw__form">
                    <form onSubmit={withdrawSubmitted}>
                        <input
                            type="number" min="0"
                            placeholder="$ ..."
                            onChange={fondsOnChange}
                            value={fondsToDraw}
                        />
                        <button type="submit">Retirar</button>
                    </form>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export {WithDraw};