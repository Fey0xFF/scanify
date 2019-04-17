import React, { Component } from 'react';

const ScannerForm = ({ onInputChange, onButtonSubmit }) => {

    return (
        <div>
            <input type="text" onChange={ onInputChange }/>
            <button onClick={ onButtonSubmit }>scan!</button>
        </div>
    )
}

export default ScannerForm;