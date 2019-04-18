import React, { Component } from 'react';

const Report = ({ vtData }) => {

    if (Object.keys(vtData).length > 0) {
        return (
            <div>full!</div>
        )
    } else {
        return (
            <div>empty!</div>
        )
    }
}

export default Report;