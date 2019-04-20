import React, { Component } from 'react';

const ScannerForm = ({ onInputChange, onButtonSubmit, accountChange, checkAccount }) => {

    return (
        <div>
            <input type="text" onChange={ onInputChange }/>
            <button onClick={ onButtonSubmit }>scan!</button>
            <input type="text" onChange={accountChange}></input>
            <button onClick={checkAccount}>Account</button>
        </div>
    )
}

export default ScannerForm;