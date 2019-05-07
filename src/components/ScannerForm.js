import React, { Component } from 'react';

const ScannerForm = ({ 
    onInputChange, 
    onURLSubmit, 
    onAccountChange, 
    onAccountSubmit, 
    onPasswordChange, 
    onPasswordSubmit 
}) => {

    return (
        <div>
            <input type="text" onChange={onInputChange}/>
            <button onClick={ onURLSubmit }>URL</button>

            <input type="text" onChange={onAccountChange}/>
            <button onClick={ onAccountSubmit }>Account</button>

            <input type="text" onChange={onPasswordChange}/>
            <button onClick={ onPasswordSubmit }>Password</button>
        </div>
    )
}

export default ScannerForm;