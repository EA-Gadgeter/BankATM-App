import React from 'react';
import "./Transaction.css";

const Transaction = () => {
  return (
      <div className="transaction">
          <div className="transaction__info">
              <div className="transaction__status-box">
                  <p>Transaccion Completada</p>
                  <p>ID: ID epicardo</p>
                  <p>Tipo: Transferencia</p>
              </div>
              <div className="transaction__info-box">
                  <p>Saldo Anterior: $50000</p>
                  <p>Saldo Actual: $40000</p>
                  <p>Tarjeta: 5555 5555 5555 5555</p>
                  <p>Fecha y Hora: 19/10/22 15:55</p>
              </div>
          </div>
          <div className="transaction__buttons">

          </div>
      </div>
  )
};

export {Transaction};