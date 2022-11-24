import React from "react";
import {TransferMenu} from "../../Pages/TransferMenu";
import {TransferFonds} from "../../Pages/TransferFonds";
import {ProtectedRoute} from "../../Components/ProtectedRoute";

const Transfer = () => {
    return (
        <ProtectedRoute>
            <TransferMenu />
        </ProtectedRoute>
    );
}

export {Transfer};