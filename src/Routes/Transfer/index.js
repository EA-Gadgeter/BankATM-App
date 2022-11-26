import React from "react";
import {TransferMenu} from "../../Pages/TransferMenu";
import {TransferFonds} from "../../Pages/TransferFonds";
import {ProtectedRoute} from "../../Components/ProtectedRoute";

const Transfer = () => {

    const [validCard, setValidCard] = React.useState(false);
    const [transferToUser, setTransferToUser] = React.useState("");

    return (
        <ProtectedRoute>
            {!validCard ?
                <TransferMenu
                    setValidCard={setValidCard}
                    setTransferToUser={setTransferToUser}
                />
                :
                <TransferFonds transferToUser={transferToUser}/>
            }
        </ProtectedRoute>
    );
}

export {Transfer};