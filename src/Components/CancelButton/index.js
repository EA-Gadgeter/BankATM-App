import React from 'react';
import {Link} from 'react-router-dom';
import './CancelButton.css';

export const CancelButton = () => {
  return (
    <Link to = '/menu' className = 'exit-button'>
     <button>Cancelar</button>
    </Link>
  )
}
